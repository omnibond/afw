// See the 'COPYING' file in the project root for licensing information.
import {useState, useEffect} from "react";

import {    
    Button,
    Dialog,
    OperationalContext,
    OperationalMode,   
    useIsMounted, 
} from "@afw/react";

import {ServiceStepDescription, ServiceStepGeneral, ServiceStepDetailed} from "../Services/ServiceNew";

import {useModel} from "@afw/react";
import {useApplication, useAppCore, useTheme} from "../../hooks";

export const ModelDeploy = (props) => {

    const [confObject, setConfObject] = useState();
    const [startup, setStartup] = useState("manual");    
    const [step, setStep] = useState(0);    

    const theme = useTheme();
    const {notification} = useApplication();
    const {application} = useAppCore();
    const dataModel = useModel();
    const isMounted = useIsMounted();

    const { model, mappedAdapterId, open } = props;

    useEffect(() => {

        const createConf = async () => {

            const newConf = dataModel.newObject({ 
                adapterId: "afw", 
                objectTypeId: "_AdaptiveConf_adapter_model"
            });            

            await newConf.initialize();
            if (!isMounted())
                return;

            const {modelId, description} = model.getPropertyValues();
    
            newConf.setPropertyValue("type", "adapter");
            newConf.setPropertyValue("adapterType", "model");
            newConf.setPropertyValue("adapterId", modelId);
            newConf.setPropertyValue("description", description);
            newConf.setPropertyValue("modelLocationAdapterId", model.getAdapterId());
            newConf.setPropertyValue("modelId", modelId);
            newConf.setPropertyValue("mappedAdapterId", mappedAdapterId);
    
            setConfObject(newConf);
        };

        if (dataModel && model)
            createConf();

    }, [model, mappedAdapterId, dataModel, isMounted]);

    const onDismiss = () => {
        setStep(0);
        props.onDismiss();
    };

    const onDeploy = async () => {
        const confAdapterId = application.getPropertyValue("confAdapterId");
        const serviceId = "adapter-" + confObject.getPropertyValue("adapterId");

        /* create a new service configuration object */
        const newService = dataModel.newObject({
            adapterId: confAdapterId, 
            objectTypeId: "_AdaptiveServiceConf_"
        });      
        await newService.initialize();  

        newService.setPropertyValue("serviceId", serviceId);
        newService.setPropertyValue("startup", startup);
        newService.setPropertyValue("conf", confObject);
        newService.setPath("/" + confAdapterId + "/_AdaptiveServiceConf_/" + serviceId);

        try {
            const response = newService.add();
            await response.result();

            notification({ message: "Service " + serviceId + " created." });
        } catch (error) {
            notification({ type: "error", message: error });
        }

        onDismiss();
    };

    if (!confObject)
        return null;
    
    return (
        <Dialog 
            open={open}
            onDismiss={onDismiss}
            isBlocking={true}
            title="Deploy Model"
            maxWidth="lg"
            contains={
                <OperationalContext.Provider value={OperationalMode.Editable}>         
                    { (step === 0) &&               
                        <ServiceStepDescription 
                            idProperty="adapterId"
                            confObject={confObject}   
                            startupKey={startup}        
                            onStartupConditionChanged={startup => setStartup(startup.key)}             
                        />           
                    }
                    {
                        (step === 1) &&
                            <ServiceStepGeneral 
                                confObject={confObject}
                            />
                    }      
                    {
                        (step === 2) &&
                            <ServiceStepDetailed 
                                confObject={confObject}
                                serviceType="adapter"
                                serviceSubtype="model"
                            />
                    }    
                </OperationalContext.Provider>
            }
            footer={
                <div style={{ display: "flex", width: "100%", padding: theme.spacing(1) }}>                    
                    <Button 
                        style={{ marginRight: theme.spacing(1) }}
                        label="Cancel"
                        onClick={onDismiss}                                
                    />                
                    <Button 
                        style={{ marginRight: theme.spacing(1) }}
                        label="Previous"
                        disabled={(step === 0)}
                        onClick={() => setStep(step - 1)}     
                        startIcon="chevron_left"                           
                    />   
                    <div style={{ flex: 1 }} />                    
                    <Button 
                        style={{ marginRight: theme.spacing(1), }}
                        label="Next"
                        disabled={(step === 2)}
                        onClick={() => setStep(step => step + 1)}
                        endIcon="chevron_right"
                    />
                    <Button 
                        style={{ marginRight: theme.spacing(1) }}
                        color="primary"
                        variant="contained"
                        label="Deploy"
                        onClick={onDeploy}
                        disabled={(step !== 2)}
                    />
                </div>
            }
        />
    );
};

export default ModelDeploy;

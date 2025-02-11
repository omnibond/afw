#!/usr/bin/env perl

#**
# @file compiler_script.pm
# @ingroup afw_bindings_perl
# @brief This file contains the Perl bindings for the compiler_script category.
#*

package afw::compiler_script;
use strict;
use warnings;

use Exporter qw(import);

our @EXPORT_OK = qw(
    assign 
    break 
    const 
    continue 
    do_while 
    for 
    for_of 
    if 
    let 
    rethrow 
    return 
    switch 
    throw 
    try 
    while 
);

=head1 NAME

afw::compiler_script - Perl module for compiler_script functions

=head2 Functions

The following functions are exported by default

=head3 assign

Assign a value to the innermost structured block definition of a variable. If
the variable is not defined, the variable is defined in the innermost
structured block. An error is thrown if not called from an array of values
(statements) in a structured function.
Assign a value to a defined variable

=head4 Parameters

    $name

Variable name

    $value

This is the value to assign to the variable.

=head3 break

This is a special function that can be called to break out of the body of a
loop. If called outside of a loop body, an error is thrown.
Break out of a block

=head4 Parameters

    $value

The value to evaluate that the enclosing loop will return. If not specified,
the last evaluated value or a null value will be returned.

=head3 const

Define one or more statically scoped constants local to the current script
block with a permanent value. These constants can be accessed from the current
block and inner blocks, but can not be assigned a different value.
Define one or more constants in the current block

=head4 Parameters

    $name

The name of one or more constants to defined in the current block.

    $value

This is the value of the constant(s).

    $type

The type of the constant(s).

=head3 continue

This is a special function that can be called in the body of a loop function
to test the condition and, if true, start evaluating the body again. If called
outside of a loop body, an error is thrown.
Continue at beginning of a loop

=head4 Parameters

=head3 do_while

This creates a new structured block with a new nested variable scope.

This function will evaluate an array of values (statements) at least once
while a condition is true. See the related functions 'break', 'continue',
'return' and 'throw'.
Evaluate an array of values (statements) at least once while a condition is true

=head4 Parameters

    $condition

While this condition is true, the loop will continue. This is evaluated in the
loop's scope.

    $body

This is an array of values (statements) that are evaluated for each iteration
of the loop. Each value in body is evaluated in order until the end of the
array or until a 'break', 'continue', 'return' or 'throw' function is
encountered.

=head3 for

This creates a new structured block with a new nested variable scope.

This function loops while condition is true. If the condition is false for the
first iteration, the loop returns a null value.
Evaluate an array of values (statements) while a condition is true with an array of initial and increment values

=head4 Parameters

    $initial

This is an array of values (statements) to evaluate before the loop starts.
The values will normally be a call to the 'assign' function.

    $condition

While this condition is true, the loop will continue.

    $increment

This is an array of values (statements) to evaluate after each iteration of
the loop. The values will normally be a call to the 'assign' function.

    $body

This is an array of values (statements) that are evaluated for each iteration
of the loop. Each value in body is evaluated in order until the end of the
array or until a 'break', 'continue', 'return' or 'throw' function is
encountered.

=head3 for_of

This creates a new structured block with a new nested variable scope.

This function will evaluate an array of values (statements) while a condition
is true with initial and increment values. The condition is tested at the
beginning of the loop. If the condition is false for the first iteration, the
loop returns a null value. This supports for-of statement.
Evaluate an array of values (statements) while a condition is true with an array of initial and increment values

=head4 Parameters

    $name

Variable name(s).

    $value

Any array, object or single value.

    $body

This is an array of values (statements) that are evaluated for each iteration
of the loop. Each value in body is evaluated in order until the end of the
array or until a 'break', 'continue', 'return' or 'throw' function is
encountered.

=head3 if

Evaluate one of two different values depending on test condition.
If/then/else function

=head4 Parameters

    $condition

If true, parameter 'then' is evaluated for result. If false, parameter 'else'
is evaluated.

    $then

This is the body of a structured block that is evaluated if 'condition' is
true. See the 'body' parameter of the 'block' function for information on how
the body is processed.

    $else

This is the body of a structured block that is evaluated if 'condition' is
false. If not specified and condition is false, a null value is returned. See
the 'body' parameter of the 'block' function for information on how the body
is processed.

=head3 let

Declare one or more statically scoped variable locations local to the current
script block and optionally assign them an initial value. These variables can
be accessed and assigned different values from the current block and inner
blocks.
Declare one or more variables in the current block

=head4 Parameters

    $name

The name of one or more variables to declared in the current block.

    $value

This is the initial value of the variable(s). If not specified, the variable
will have a value of undefined.

    $type

The type of the variable(s).

=head3 rethrow

This is a special function that can be called to rethrow an error inside of a
catch block. If called outside of a catch body, an error is thrown.
rethrow error from inside case block

=head4 Parameters

=head3 return

Return from the outermost structured block. If the expression of a lambda
function is a block function, this will effectively return from the lambda
function. If called outside of a structured block, an error is thrown.
Return from the outermost structured block

=head4 Parameters

    $value

The value to evaluate that the outermost block will return. If not specified,
the last evaluated value or a null value will be returned.

=head3 switch

Support for switch statement.
All combinations true

=head4 Parameters

    $predicate

The predicate is passed two parameters and must return a boolean. The first
parameter passed is the evaluated value of the value1 parameter and the second
is the value2 from a case clause. This predicate will often be 'eqx' to use
the exactly equal function but can also be any other function such as
'regexp_match' or a lambda function.

    $value1

The first parameter passed to the predicate.

    $case_clause

This is one or more case clauses which are pairs of a value2 parameter
followed by a statement list or undefined parameter. One value2 can be
undefined to indicate the default case clause.

For the first value2 that is undefined or calling the predicate returns true,
the statement list followed by any statement lists of subsequent case clauses
are executed until a break or return is encountered. The predicate is called
with value1 and the case clause's value2.

=head3 throw

This throws an error that can be caught by a try/catch block. An error object
of object type _AdaptiveError_ will be available in the catch block. Its 'id'
property will be set to 'throw'. The other properties set based on the
parameters specified and where this function is called.
Throws an error

=head4 Parameters

    $message

This is the message that will be included in the _AdaptiveError_ error object
available in the catch block.

    $additional

Optional additional information that will be available as a 'additional'
property in the error object.

=head3 try

This creates a new structured block with a new nested variable scope.

This function will evaluate the body statements. If an error is thrown and
there is an optional catch, the error will be 'caught' and the associated
statements will be evaluated. The optional finally statements are always
evaluated after the body and catch statements. See the related functions
'break', 'continue', 'return' and 'throw'.
Evaluate an array of values (statements) as a try block with optional catch and finally statements

=head4 Parameters

    $body

This is an array of values (statements) that are evaluated. Each value in body
is evaluated in order until the end of the list or until a 'break',
'continue', 'return' or 'throw' function is encountered.

    $finally

This is an array of values (statements) that are evaluated after the try and
catch statements even if an error occurs. Each value in body is evaluated in
order until the end of the list or until a 'break', 'continue', 'return' or
'throw' function is encountered.

    $catch

This is an array of values (statements) that are evaluated when an error is
thrown while evaluating the body. Each value in body is evaluated in order
until the end of the list or until a 'break', 'continue', 'return' or 'throw'
function is encountered.

    $error

The error object thrown. This is only available in the catch block. See
adaptive object type _AdaptiveObjectType_ for details.

=head3 while

This creates a new structured block with a new nested variable scope.

This function will evaluate an array of values (statements) while a condition
is true. The condition is tested at the beginning of the loop. If the
condition is false for the first iteration, the loop returns a null value. See
the related functions 'break', 'continue', 'return' and 'throw'.
Evaluate an array of values (statements) while a condition is true

=head4 Parameters

    $condition

While this condition is true, the loop will continue. This is evaluated in the
loop's scope.

    $body

This is an array of values (statements) that are evaluated for each iteration
of the loop. Each value in body is evaluated in order until the end of the
list or until a 'break', 'continue', 'return' or 'throw' function is
encountered.

=cut

sub assign {
    my ($name, $value) = @_;

    my $request = $session->request()

    $request->set("function" => "assign");
    $request->set("name", $name);
    $request->set("value", $value);

    return $request->getResult();
}

sub break_ {
    my ($value) = @_;

    my $request = $session->request()

    $request->set("function" => "break");

    if (defined $value)
        $request->set("value", $value);

    return $request->getResult();
}

sub const {
    my ($name, $value, $type) = @_;

    my $request = $session->request()

    $request->set("function" => "const");
    $request->set("name", $name);
    $request->set("value", $value);

    if (defined $type)
        $request->set("type", $type);

    return $request->getResult();
}

sub continue_ {
    my () = @_;

    my $request = $session->request()

    $request->set("function" => "continue");

    return $request->getResult();
}

sub do_while {
    my ($condition, $body) = @_;

    my $request = $session->request()

    $request->set("function" => "do_while");
    $request->set("condition", $condition);
    $request->set("body", $body);

    return $request->getResult();
}

sub for_ {
    my ($initial, $condition, $increment, $body) = @_;

    my $request = $session->request()

    $request->set("function" => "for");

    if (defined $initial)
        $request->set("initial", $initial);

    if (defined $condition)
        $request->set("condition", $condition);

    if (defined $increment)
        $request->set("increment", $increment);

    if (defined $body)
        $request->set("body", $body);

    return $request->getResult();
}

sub for_of {
    my ($name, $value, $body) = @_;

    my $request = $session->request()

    $request->set("function" => "for_of");
    $request->set("name", $name);
    $request->set("value", $value);

    if (defined $body)
        $request->set("body", $body);

    return $request->getResult();
}

sub if_ {
    my ($condition, $then, $else) = @_;

    my $request = $session->request()

    $request->set("function" => "if");
    $request->set("condition", $condition);
    $request->set("then", $then);

    if (defined $else)
        $request->set("else", $else);

    return $request->getResult();
}

sub let {
    my ($name, $value, $type) = @_;

    my $request = $session->request()

    $request->set("function" => "let");
    $request->set("name", $name);

    if (defined $value)
        $request->set("value", $value);

    if (defined $type)
        $request->set("type", $type);

    return $request->getResult();
}

sub rethrow {
    my () = @_;

    my $request = $session->request()

    $request->set("function" => "rethrow");

    return $request->getResult();
}

sub return_ {
    my ($value) = @_;

    my $request = $session->request()

    $request->set("function" => "return");

    if (defined $value)
        $request->set("value", $value);

    return $request->getResult();
}

sub switch {
    my ($predicate, $value1, $case_clause) = @_;

    my $request = $session->request()

    $request->set("function" => "switch");
    $request->set("predicate", $predicate);
    $request->set("value1", $value1);
    $request->set("case_clause", $case_clause);

    return $request->getResult();
}

sub throw {
    my ($message, $additional) = @_;

    my $request = $session->request()

    $request->set("function" => "throw");
    $request->set("message", $message);

    if (defined $additional)
        $request->set("additional", $additional);

    return $request->getResult();
}

sub try_ {
    my ($body, $finally, $catch, $error) = @_;

    my $request = $session->request()

    $request->set("function" => "try");
    $request->set("body", $body);

    if (defined $finally)
        $request->set("finally", $finally);

    if (defined $catch)
        $request->set("catch", $catch);

    if (defined $error)
        $request->set("error", $error);

    return $request->getResult();
}

sub while_ {
    my ($condition, $body) = @_;

    my $request = $session->request()

    $request->set("function" => "while");
    $request->set("condition", $condition);
    $request->set("body", $body);

    return $request->getResult();
}

42;

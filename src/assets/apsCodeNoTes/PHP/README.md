# What is PHP Language & Main Points
-Use to build website and web application
-stands for "HyperText Preprocessser"
-Server side Language
-faster than ASP and JSP
-Introduce in 1995
-php automatically convert a data type 
----------------------------------------------------------------
# Create program file here

-C\:XAMPP\htdocs

////////////////////////////////////////////////////////////////
######################## Starting ##############################

## Hello world Program

<?php  //php opening Tag

echo /*(Print)*/ "Hello World"

?>
---------------------------------------------------------------
##### Enable Strict mode by adding 
            <? php declare(strict_types=1); // strict requirement
                ......
                ......
            ?>
================================================================
# Note:
--only written in Php tag code execute as a php code
----------------------------------------------------------------
## Php Version 
  echo phpversion();   //show version of Php
## Php Info
   echo phpinfo(); //show INfo

----------------------------------------------------------------

## echo
- echo is Language Constructor and print data on screen.
- Not a case sensitive

##### Syntax: 
          echo string/Data
               OR
          echo(String/data)
          
\\echo without parentheses can take multiple parameters, which get concatenated:

   echo  "and a ", 1, 2, 3;   // comma-separated without parentheses
   echo ("and a 123");        // just one parameter with parentheses
----------------------------------------------------------------

### Difference b\w print echo
   \\     The differences are small: echo has no return value while print has a return value of 1 so it can be used in expressions. echo can take multiple parameters (although such usage is rare) while print can take one argument. echo is marginally faster than print.


\\print() can only take one parameter:

   print ("and a 123");
   print  "and a 123";
----------------------------------------------------------------
## line Break
-"<br/>"
----------------------------------------------------------------
## Variable in Php
- a storage location
- we cannot declare data type name , it automatically give dataType according to Data


##### Syntax:    //$ sign show it is a varaible as ${} in js

           $var_name

### Rules of Variable Deeclaration in Php

- varname must be starting with $
- Varaible canot start special letter and number
- only Started with Alphabetic and underScore(_)
- Varaible only consists of Alpha_numeric and underscore(_)

----------------------------------------------------------------
## Php and HTML Combine 

# HTML in PHP

            <?php 
                 echo "<h1>Hello World</h1>"
                 echo "<h1>$name</h1>" //Deal with varaible in HTML
                 echo "<h1>".$name."</h1>"    // also working
            ?>

# PHP in HTML
          
          <h1>
            <?php
                //Write php here
            ?>
          </h1>

================================================================
# Note :
   - if on server we cannot see error list 
   simply find php.ini
   and on display Error

       OR 
    <?php 
    echo phpinfo();//Display all php info and turn on display Error
    ?>
----------------------------------------------------------------
## Constant in Php
   
   ##### Syntax:
             const cons_name
     - Acess
           without $ sign 
           as (name) 

## Create a PHP Constant
To create a constant, use the define() function.

##### Syntax:
            define(name, value, case-insensitive(true/false));
            
----------------------------------------------------------------
## Data Types in Php
PHP supports the following data types:

- String
- Integer
- Float (floating point numbers - also called double)
- Boolean
- Array
-Object
- NULL
- Resource

================================================================
## Get Data type by varname
   
   ##### Syntax;
              var_dump(var_name)

----------------------------------------------------------------
### Scope of Varaible 

## Global Scope 
- Global variable cannot acces in to the function if we use it 
write here:
          
          global var_name

here write var_name which is import from outside the function

# Note:
     - All global varaible store into $GLOBALS[index] array
     here index is the name of varaible 

- We can also operate like this:

   ##  $GLOBALS['x']=$GLOBALS['y']+$GLOBALS['z']   \\ only write in Upper Case Globals
     \\ same this statment $x=$y+$z out side the function 

## Static Scope
## Local Scope

----------------------------------------------------------------
##                           String Function 


# Find Length(all character count): 
            \\ strlen(string) 
# word Counter: 
             \\ str_word_count(string)
# Search the string and get its index position:
             \\ strpos(all String,searching String)

# TO Upper Case:
             \\ strtoupper(str)    same lower case
# Replace String in destinction varaiable:
             \\ str_replace(old string , new string , desti varaible name);
# Reverse String:
             \\ strrev(str)
# Remove Whitespace:
             \\ trim()
# Convert string into Array:
             \\ explode({sperator e.g, whitespace},var_string)

# Concatenation  string(. for Concatenation)
            "World"." Hello"
# Slicing string:
            Start the slice at index 6 and end the slice 5 positions later:

                      $x = "Hello World!";
                      echo substr($x, 6, 5);
----------------------------------------------------------------
## PHP Numbers

# There are three main numeric types in PHP:

- Integer
- Float
- Number Strings
# In addition, PHP has two more data types used for numbers:

- Infinity
- NaN

# PHP has the following functions to check if a numeric value is finite or infinite:

is_finite()
is_infinite()

# PHP has the following functions to check if the type of a variable is integer:

is_int()
is_integer() - alias of is_int()
is_long() - alias of is_int()

# PHP has the following functions to check if the type of a variable is float:

is_float()
is_double() - alias of is_float()


# is_NaN() 
----------------------------------------------------------------
## Type Casting

##### Syntax:
           
           (data_type in which convert) var_name

----------------------------------------------------------------

### PHP Operators
PHP divides the operators in the following groups:

- Arithmetic operators
- Assignment operators
- Comparison operators
- Increment/Decrement operators
- Logical operators
- String operators
- Array operators
- Conditional assignment operators

================================================================
## Arithmetic operators
    +,-,/,*,%,**(Power)

================================================================
##  Assignment operators
       =,=+,=-,=/,=*,=%

================================================================
## Comparison operators

- == only equal check
- === and also check datatype
- !=  OR  <> only not equal
- > Less then
- < greater Than
- <= greater and equal
- >= less and equal
- <=>   spaceship(Returns an integer less than, equal to, or greater than zero, depending on if $x is less than, equal to, or greater than $y. Introduced in PHP 7.)

================================================================
## Increment/Decrement operators

- s++ post increament
- ++s pre increment

================================================================
## Logical operators

- and
- or 
- xor  (true if both not same input)
- ||
- &&
_ !

================================================================
## String operators

-  .  (Concatenation )
-  .= (//  and assign)

================================================================
## Array operators

- +	Union	$x + $y	Union of $x and $y	
- ==	Equality	$x == $y	Returns true if $x and $y have the same key/value pairs	
- ===	Identity	$x === $y	Returns true if $x and $y have the same key/value pairs in the same order and of the same types	
- !=	Inequality	$x != $y	Returns true if $x is not equal to $y	
- <>	Inequality	$x <> $y	Returns true if $x is not equal to $y	
- !==	Non-identity   	$x !== $y	Returns true if $x is not identical to $y

================================================================
## Conditional assignment operators

-  ?: Ternary operator(con?true:false;)
-  ?? 
          Null coalescing(	Returns the value of $x.
The value of $x is expr1 if expr1 exists, and is not NULL.
If expr1 does not exist, or is NULL, the value of $x is expr2.
Introduced in PHP 7)


----------------------------------------------------------------
### PHp Conditional Statments

- if statment
- if-else statment
- if-elseif-else statment
- switch statment

----------------------------------------------------------------
### PHp LOOPs

- do-while loop
    
- while loop

  ### ALTernative Syntax: 
              	while(condition):
                .........
                ........
                endwhile;
- for loop
- foreach loop
  ### Syntax: 
              	foreach(Array as var){}
### ALTernative Syntax: 
              	foreach(Array as var):
                .........
                ........
                endforeach;

----------------------------------------------------------------
### Function in PHP
 ### Syntax: 
              	function f_name(arg){
                    .....
                    return ...;
                }

## To many argument list (...operator in argument)
function f_name(...arg){
                    .....
                    return ...;
                }
# by refernece
function f_name(&arg){
                    .....
                    return ...;
                }

   ###### If we enable strict mode . Then mandatory to add return type as
      function f_name(&arg): return_Type{
                    .....
                    return ...;
      }

==============================================================
## Nested Function
function(){
  function(){

  }
  //if we call in side the function we must call after
  function();
}
//If we call here inner function we must call first parent function

==============================================================
## Varaible Function

stord function in Variable

  #### Syntax:
             function test(){
               //write function content
             }
             $var="test;
             $var();

--------------------------------------------------------------
### PHP Array Types

####          $arr_name=array(.....)
####          $arr_name=[.....]

In PHP, there are three types of arrays:

- Indexed arrays - Arrays with a numeric index
- Associative arrays - Arrays with named keys
- Multidimensional arrays - Arrays containing one or more arrays
================================================================
## Indexed arrays
- simple array
================================================================
## Associative arrays
e.g,
    $car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);


#### loop on this Array
        foreach ($car as $x => $y) {
        echo "$x: $y <br>";
        }


================================================================
## Multidimensional arrays
================================================================
### PHP - Sort Functions For Arrays
In this chapter, we will go through the following PHP array sort functions:

- sort() - sort arrays in ascending order
- rsort() - sort arrays in descending order
- asort() - sort associative arrays in ascending order, according to the value
- ksort() - sort associative arrays in ascending order, according to the key
- arsort() - sort associative arrays in descending order, according to the value
- krsort() - sort associative arrays in descending order, according to the key
==============================================================
## Add & Remove Array element

#  Element Add:
    array_push(arr_name,"v......","v1..")

# single element remove:
     array_pop(arr_nmae)//remove last element

# remove n number of last elemt
     arrray_splice(arr_name,number of element)


--------------------------------------------------------------
## GoTO FUnction

  ###### Syntax:
                goto label;
                //skiped al statment written here
                label:
----------------------------------------------------------------

## Load/Include php file

# four function which is used for this purpose

- include  // Simple include file
         include("File_path")
---------------------------------------
- include_once   // only load once time (check if load then doesn't load)
             include_once("path"); 
---------------------------------------
if file does not exist or if we add wrong path then include give a warning but require give a fetal error
---------------------------------------
- require
        require('path)
---------------------------------------          
- rquire_once
        require_once('path)
               
----------------------------------------------------------------
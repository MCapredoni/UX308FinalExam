import {hello, colour_mix, largest_product, day_of_the_week, is_leap} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that determines the secondary colour from mixing two primary RGB.
      <h2>results</h2>
      <p>colour_mix(red, green) == "{colour_mix("red", "green")}"</p>
      <p>colour_mix("blue", "green") == "{colour_mix("blue", "green")}"</p>
      <p>colour_mix("red", "blue") == "{colour_mix("red", "blue")}"</p>
    </section>;
}

function Question3(){
    return <section>
3. Write a function that calculates the product of the two largest values.
<h2>results</h2>
<p>largest_product(8, 12, 20) == "{largest_product(8, 12, 20)}"</p>
<p>largest_product(40, 50, 60) == "{largest_product(40, 50, 60)}"</p>
<p>largest_product(29, 55, 63) == "{largest_product(29, 55, 63)}"</p>
    </section>
}

function Question4(){
    return <section>
4. Write a function that converts numbers to day of the week.
<h2>results</h2>
<p>day_of_the_week(1) == "{day_of_the_week(1)}"</p>
<p>day_of_the_week(3) == "{day_of_the_week(3)}"</p>
<p>day_of_the_week(6) == "{day_of_the_week(6)}"</p>
    </section>
}


function Question6(){
    return <section>
6. Write a function that determines a leap year.
<h2>results</h2>
<p>is_leap(1999) == "{is_leap(1999)}"</p>
<p>is_leap(2000) == "{is_leap(2000)}"</p>
    </section>
}

export {Question1, Question2, Question3, Question4, Question6}
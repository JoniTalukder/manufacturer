import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    01. How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p>Keeping component state local where necessary.</p>
                    <p> Memoizing React components to prevent unnecessary re-renders.</p>
                    <p>Code-splitting in React using dynamic import() </p>
                    <p> Windowing or list virtualization in React.</p>
                    <p> Lazy loading images in React.</p>
                </div>
            </div>
            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    2. What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>
                        1. Data State. ...
                        2. Control State. ...
                        3. Session State. ...
                        4. Location State. ...
                    </p>
                </div>
            </div>
            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    3. How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    4. You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content">
                    <p>1. If I need the index of the found element in the array, use findIndex() .
                        2. If I need to find the index of a value, use Array.prototype.indexOf() . ...
                        3. If I need to find if a value exists in an array, use Array.prototype.includes() .</p>
                </div>
            </div>
            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    5. What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.</p>
                    <p>One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
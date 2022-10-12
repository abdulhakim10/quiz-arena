import React from 'react';

const Blog = () => {
    return (
        // first question
        <div className='m-12'>
            <div className='border rounded-lg border-blue-400 mt-6 p-6 bg-blue-100 text-center'>
            <h2 className='text-2xl font-serif'>What is the purpose of React Router?</h2>
            <p className='font-serif mt-3'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>

            {/* second question */}
            <div className='border rounded-lg border-blue-400 mt-6 p-6 bg-blue-100 text-center'>
            <h2 className='text-2xl font-serif'>How does Context API works?</h2>
            <p className='font-serif mt-3'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>

            {/* third question */}
            <div className='border rounded-lg border-blue-400 mt-6 p-6 bg-blue-100 text-center'>
            <h2 className='text-2xl font-serif'>What is useRef?</h2>
            <p className='font-serif mt-3'>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React, React will set its .current property to the corresponding DOM node whenever that node changes.The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
</p>
            </div>
        </div>
    );
};

export default Blog;
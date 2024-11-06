import React from 'react';


const About = () => {
    return (
        <div>
            <h2 className='fs-2 bordered-text'>About Me</h2>
            <img src='https://as2.ftcdn.net/v2/jpg/08/17/59/35/1000_F_817593586_cFIXIlKt7ckw0reThfTJ5crix3fn5qkR.jpg' alt='oscar rendon' className='img-fluid img-md flex' style={{ width: '100px', height: '100px'}}/>
            <p className='fs-5'>Passionate front-end developer with a solid foundation in HTML, 
                CSS, and JavaScript, and a strong focus on creating responsive, dynamic web applications. 
                Skilled in React and TypeScript, I bring robust type safety and modern 
                front-end architecture to my projects. With experience in PostgreSQL, 
                I also ensure efficient data management and seamless integration with back-end systems. 
                Constantly expanding my skills, I enjoy building user-centered applications that 
                combine clean code with engaging design.
            </p>
        </div>
    );
};

export default About;
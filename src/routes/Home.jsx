import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <img src='https://avatars.githubusercontent.com/u/83923760?v=4' className="rounded-full w-24 h-24"/>
      <h1 className="text-4xl mt-4">Hi 👋, I'm Alexander Martínez Cisneros</h1>
      <h3 className="text-xl mt-2">A passionate back-end developer, with an enthusiasm for databases, creating APIs and developing mobile applications and web systems.</h3>

      <p className="mt-4"><img src="https://komarev.com/ghpvc/?username=alexandermc18&label=Profile%20views&color=0e75b6&style=flat" alt="alexandermc18" /></p>

      <p className="mt-4">👨‍💻 I'm currently studying <strong>Computer systems engineering</strong></p>
      <p className="mt-2">📫 How to reach me: <strong>martinezcisnerosalexander@gmail.com</strong></p>

      <h3 className="mt-6 text-2xl">Connect with me:</h3>
      <div className="flex flex-wrap justify-center mt-6 w-full">
      <p className="mt-2 flex flex-fil items-center">
        <div className="mb-4"><a href="https://web.facebook.com/profile.php?id=100080741028953" className="text-4xl"><FaFacebook /></a></div>
        <div className="mb-4"><a href="link_de_twitter" className="text-4xl"><FaTwitter /></a></div>
        <div className="mb-4"><a href="https://www.instagram.com/alexmartinezcis18/" className="text-4xl"><FaInstagram /></a></div>
        <div className="mb-4"><a href="https://www.linkedin.com/in/alexander-martinez-cisneros-a077702b7/" className="text-4xl"><FaLinkedin /></a></div>
      </p>


      </div>

      <h3 className="mt-6 text-2xl">Languages and Tools:</h3>
      <div className="flex flex-wrap justify-center mt-4">
        <a href="https://developer.android.com" target="_blank" rel="noreferrer"> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://angular.io" target="_blank" rel="noreferrer">
          <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
          <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://dart.dev" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://flutter.dev" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.java.com" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://kotlinlang.org" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://mariadb.org/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mariadb" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer">
          <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://opencv.org/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.php.net" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.python.org" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
          <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.tensorflow.org" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40" className="m-2"/>
        </a> 
        <a href="https://dotnet.microsoft.com/apps/xamarin" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg" alt="xamarin" width="40" height="40" className="m-2"/>
        </a> 

        <div className="flex flex-wrap justify-center mt-6 w-full">
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=alexandermc18&show_icons=true&locale=en&layout=compact" alt="alexandermc18" className="w-full md:w-1/2 p-2"/>
          <img src="https://github-readme-stats.vercel.app/api?username=alexandermc18&show_icons=true&locale=en" alt="alexandermc18" className="w-full md:w-1/2 p-2"/>
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=alexandermc18&" alt="alexandermc18" className="w-full md:w-1/2 p-2"/>
        </div>
      </div>

      
    </div>
  );
}

export default Home;

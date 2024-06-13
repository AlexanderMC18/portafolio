import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-100">
      <div className="flex items-center">
        <img src="https://avatars.githubusercontent.com/u/83923760?v=4" className="rounded-full w-48 h-48" alt="Perfil" />
        <h1 className="text-4xl ml-4 font-bold">Hola 👋, soy Alexander Martínez Cisneros</h1>
      </div>
      <h3 className="text-xl mt-2 text-gray-700">Desarrollador back-end apasionado, entusiasta de las bases de datos, creación de APIs y desarrollo de aplicaciones móviles y sistemas web.</h3>
      <p className="mt-4">
        <img src="https://komarev.com/ghpvc/?username=alexandermc18&label=Profile%20views&color=0e75b6&style=flat" alt="Visitas al perfil" />
      </p>
      <p className="mt-4">👨‍💻 Actualmente estoy estudiando <strong>Ingeniería en Sistemas Computacionales</strong></p>
      <p className="mt-2">📫 Cómo contactarme: <strong>martinezcisnerosalexander@gmail.com</strong></p>
      <h3 className="mt-6 text-2xl font-semibold">Conéctate conmigo:</h3>
      <div className="flex justify-center mt-6 space-x-6">
        <a href="https://web.facebook.com/profile.php?id=100080741028953" className="text-4xl text-blue-600 hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="link_de_twitter" className="text-4xl text-blue-400 hover:text-blue-600">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/alexmartinezcis18/" className="text-4xl text-pink-600 hover:text-pink-800">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/alexander-martinez-cisneros-a077702b7/" className="text-4xl text-blue-700 hover:text-blue-900">
          <FaLinkedin />
        </a>
      </div>
      <h3 className="mt-6 text-2xl font-semibold">Languages and Tools:</h3>
      <div className="flex flex-wrap justify-center mt-4 space-x-4">
        <IconLink href="https://developer.android.com" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" />
        <IconLink href="https://angular.io" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" />
        <IconLink href="https://www.arduino.cc/" src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" />
        <IconLink href="https://aws.amazon.com" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" />
        <IconLink href="https://getbootstrap.com" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" />
        <IconLink href="https://www.w3schools.com/cpp/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" />
        <IconLink href="https://www.w3schools.com/cs/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" />
        <IconLink href="https://www.w3schools.com/css/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />
        <IconLink href="https://dart.dev" src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" />
        <IconLink href="https://www.figma.com/" src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" />
        <IconLink href="https://firebase.google.com/" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" />
        <IconLink href="https://flask.palletsprojects.com/" src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" />
        <IconLink href="https://flutter.dev" src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" />
        <IconLink href="https://www.w3.org/html/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" />
        <IconLink href="https://www.java.com" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" />
        <IconLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />
        <IconLink href="https://kotlinlang.org" src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" />
        <IconLink href="https://mariadb.org/" src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mariadb" />
        <IconLink href="https://www.mongodb.com/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" />
        <IconLink href="https://www.microsoft.com/en-us/sql-server" src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" />
        <IconLink href="https://www.mysql.com/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" />
        <IconLink href="https://nodejs.org" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" />
        <IconLink href="https://opencv.org/" src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" />
        <IconLink href="https://pandas.pydata.org/" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" />
        <IconLink href="https://www.php.net" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" />
        <IconLink href="https://postman.com" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" />
        <IconLink href="https://www.python.org" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" />
        <IconLink href="https://reactjs.org/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" />
        <IconLink href="https://reactnative.dev/" src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" />
        <IconLink href="https://www.sqlite.org/" src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" />
        <IconLink href="https://www.tensorflow.org" src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" />
        <IconLink href="https://www.typescriptlang.org/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" />
        <IconLink href="https://vuejs.org/" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" />
        <IconLink href="https://dotnet.microsoft.com/apps/xamarin" src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg" alt="xamarin" />
      </div>
      <div className="flex flex-wrap justify-center mt-6 w-full space-y-4 md:space-y-0 md:space-x-4">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=alexandermc18&show_icons=true&locale=en&layout=compact" alt="Top Languages" className="w-full md:w-1/3 p-2" />
        <img src="https://github-readme-stats.vercel.app/api?username=alexandermc18&show_icons=true&locale=en" alt="GitHub Stats" className="w-full md:w-1/3 p-2" />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=alexandermc18&" alt="GitHub Streak" className="w-full md:w-1/3 p-2" />
      </div>
    </div>
  );
}

function IconLink({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} width="40" height="40" className="m-2 hover:opacity-75" />
    </a>
  );
}

export default Home;

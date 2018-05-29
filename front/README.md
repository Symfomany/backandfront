React Composant

```
    const myTitle =  <h1>Bienvenue juju</h1>;
    {myTitle}

    Puis

  const myTitle = (props) => <h1>Bienvenue {props.nom}</h1>;
  {myTitle({
    nom: "Julien"
  })}



  En ES6

  const myTitle = ({ nom, prenom }) => (
      <h1>
        Bienvenue {nom} {prenom}
      </h1>
    );

    {myTitle({
      nom: "Boyer",
      prenom: "Julien",
      age: 20
    })}


    Puis, dans un fichier séparé Hello.js

    import React from "react";
    const Hello = ({ message = "Coucou" }) => <h3>Votre message : {message}</h3>;
    export default Hello;

    App.js
      import Hello from "./Hello";
      <Hello message="Hey!" />




    Ou en raccourcis syntaxe:

    const Button = ({ title }) => {
      return <h2>Je suis un boutton {title}</h2>;
    };

    <Button title="super" />

    Plus fort:

    const Button = ({ title, subtitle = "Sous-titre par défault" }) => {
      return (
        <div>
          <h2>Je suis un titre {title}</h2>
          <h3>Sous titre: {subtitle}</h3>
        </div>
      );
    };

    <Button title="super" />


    Encore Plus Fort...:

    const SuperBoutton = props => {
      return <Button {...props} />;
    };
    <SuperBoutton title="super" />

```

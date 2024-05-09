# Alura - React Course
This project was developed on the Alura course (React Course: developing with JavaScript)
the initial development of the project followed the course activities and later converted the project to use Typescript

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/andresinho20049/alura-react-js/blob/master/README.pt-br.md)

## Available commands

In the terminal, inside the project folder, you can execute:

### `npm start`

Run the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

The page will be reloaded as soon as any changes are made.\
You can also see any errors in the console.

### `npm run build`

Builds the application for production in the `build`.\ folder
It correctly bundles React in production mode and optimizes the build for the best performance.

Compilation is minified and file names include hashes.\
Your app is ready to be deployed!

## Course activities
The development of the project was based on a design presented in [Figma](https://www.figma.com/), the objective of the project is to create a form and after filling out the form, create a new card with the previously filled data.

The project in the course was carried out with Javascript and after finishing the course, I changed the project to use Typescript, then replaced points of the code that were passed from props to the components, I reduced some props used by creating contexts.

Using context I was able to have better organization in the code and the save function that was passed to the form via props is now executed in context using the useCallbacks hooks, also reducing function loads.

Below is an example of how the context was created
```ts

   const [times, setTimes] = useState(baseTimes);

   const handlerAddNewCollaborator = useCallback((collaborator: EmployeeType) => {

     const myNextList = [...times];
     const currentTime = myNextList.find((a) => a.name === collaborator.time);
     currentTime.collaborators = [...currentTime.collaborators, collaborator];
     setTimes(myNextList);

   }, [times]);

   return <FormContext.Provider value={{times, handlerAddNewCollaborator}}>{children}</FormContext.Provider>;
```

Another point to be highlighted is that in the original course project the list of teams and collaborators are separated and when passing the team's collaborators to rendering a filter is created.

Here the team roster structure is this
```ts
type TimeType = {
   name: string;
   primarycolor: string;
   secondarycolor: string;
   collaborators: EmployeeType[];
};
```

This way, the list of collaborators is within the Team object, and then at the time of registration, the collaborator's team is validated and inserted into the team list assigned to him.

> Developer André Carlos
> Project: Alura - React Course
> [Click here to view the certificate](https://cursos.alura.com.br/user/andre-oliveira-98/course/react-desenvolvendo-javascript/certificate)
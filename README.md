# Digital Bond Task
### you can show live Demo on Link : https://digital-bond-task.netlify.app/template-driven-form
## Hi my name is Ahmed Abd Ellatif. I created simple website by using Angular. I will show what I did in this project.

## 1- I made a degram of the project.
![Screenshot 2023-02-21 004344](https://user-images.githubusercontent.com/61418344/220211173-23d7eace-84df-45fa-808d-8a1aa18aa3aa.jpg)
I divided the project into components I used 5 components
   > - Home Component
   > - Header Component
   > - Teamplate driven form Component
   > - Reactive form Component
   > - 404 page Component
  
 ### 2- I used Angular Routing 

![routing](https://user-images.githubusercontent.com/61418344/220211801-58967d18-ea4c-46d3-baa5-fb5135f6846b.jpg)

> - if path === ' ' redirectTo Template-driven-form Component
> - if path === 'template-driven-form'  Template-driven-form Component
> - if path === 'reactive-form'  Reactive-form Component
> - if path not found  redirect pageNotFound Component

### header (navbar)
> - Form1  redirect to Template-driven-form Component
> - Form 2 redirect to Reactive-form Component
![navbar](https://user-images.githubusercontent.com/61418344/220215840-89f58a5c-a239-44e9-8dc6-7886607752ca.jpg)



 ### 3- I used Bootstrap
 
 > - 1- npm install --save bootstrap
 > - 2- Add "node_modules/bootstrap/dist/css/bootstrap.min.css" in Styles in angular.json file 
 > - 3- Add @import "~bootstrap/dist/css/bootstrap.css"; in style.css file


### Home Component 

> -  home component contain header and form (TDF or Reactive Form) 

![rf](https://user-images.githubusercontent.com/61418344/220213554-1b15a372-a5d4-4392-89e0-891183b859fc.jpg)

### Template Drive Form (TDF)

> -  contain on different inputs in types
> - button Disabled 

![TDForm](https://user-images.githubusercontent.com/61418344/220213705-944cca6a-8fe9-4705-b21b-63e11086cbc0.jpg)


### I created Validation of this form by using Template Driven Form (TDF)
![Validation in TDF](https://user-images.githubusercontent.com/61418344/220214096-eef64182-9a84-49b8-9543-c9b118df27d8.jpg)

### when I complete  all fields validations disappear and the button non disabled  
![complate data TDF](https://user-images.githubusercontent.com/61418344/220214401-8ef6e00c-772f-4ec7-9033-6d3372c9e2e2.jpg)

### Reactive Form 

> - contain on different inputs in types
> - button Disabled
![RForm](https://user-images.githubusercontent.com/61418344/220215134-d706b669-596d-41cc-b989-3e66d8571f96.jpg)


### I created Validation of this form by using Reactive Form
![Validation in RF](https://user-images.githubusercontent.com/61418344/220215212-f3621df8-e73b-4423-b42b-b30b6c21ff99.jpg)


### hen I complete all fields validations disappear and the button non disabled
![complate data Rf](https://user-images.githubusercontent.com/61418344/220215243-028a0c55-38cf-4c65-ac01-ef062b0c6359.jpg)

### Page Not Found 404
> - if write wrong pass in URL redirect to in 404 page
> - in 404 page text Back button return to Template Driven Form Component     
![404](https://user-images.githubusercontent.com/61418344/220215508-b55d1563-54f0-42f2-af40-2c93e9ac36a7.jpg)



## why different between (TDF and Reactive Form)
### Template Driven Form 

> - write in HTML
> - Tow Way Binding
> - used in Small or medium Cases

### Reactive Form 

> - Typescript
> - used in Large Cases
> - add validation at runtime 
> - add or remove controls at runtime
> - add validation based on conditions











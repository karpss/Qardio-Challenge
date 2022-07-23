# Qardio-Challenge
Displaying a view of thumbnails from the Het Rijksmuseum

# How to run this project
- git clone the project, then ```npm install ``` after this ```npm start``` to start the project.

# Folder Structure
- There is a Gallery folder inside the component directory. This houses the major component of the application.
- Inside this Gallery folder there is a ```Gallery.tsx``` component that makes the request and renders the data and ```Gallery.css``` file that styles the component. Tests for this component can be found in the ```__test__``` folder in this directory.
- There is also a reducer folder that hosts the exported reducer function in ```Reducer.tsx```. This is used to indicate that the data fetching operation is in progress and if it fails, it shows an error message.
- ```mockData.ts``` is used to mock queried data for testing.


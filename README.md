# The Embedded Library Theme 
The collection of themes the embedded system uses. This is a collection of themes that are compatible with the created embedded control panel. 
Navigate to the `collection` folder to see all the available site themes. 

# How To Create a theme 
Firt create your theme folder. 
Create The Following Files On Your Theme Folder
-   1. `index.html`: This will be used as the file that will be used as your sites preview. This is your basic File design. 
-   2. `poster.png`: This file is the thumbnail for your theme. It is essential for showcasing your design in the template marketplace or admin dashboard.
-   3. `interface`: This is the core HTML file used by the system to generate the live website. Follow the Embedded Sites Theme Creation Guide For the interface 
-   4. `autofill.json`: This file is required. It provides fallback data in case a user hasn't configured specific settings yet. This ensures your template never looks "broken" during the initial setup. 
-   5. `ownership.json`: A json file that contains all the details regarding the theme owners 

# Missig Theme 
All themes that havent been uploaded to the public are stored on the `playground` folder. This acts a temporary storage location until your theme has been approaved. 
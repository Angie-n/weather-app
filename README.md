Vanilla JS app that makes API calls to get information about the weather at the requested location.


## Installation and Setup Instructions


Clone this repository


Installation:


`npm install`  


To Visit App:


`localhost:3000`  


## Reflection


To get used to making API calls and developing a UI based on the information received from them, I created a weather app that uses OpenWeather’s free tier to get information on the current weather conditions as well as forecasted results of the user’s requested location. I also used localStorage so that users can save cities to view later. 


A challenge I encountered while developing this app was accounting for the client’s location, as the hours, day, and week mentioned in the forecast should reflect their current timezone. Building helper functions for date manipulation, I first received the date in UTC before converting it based on the client’s timezone. Since OpenAI’s free tier was limited to retrieving information for every third hour rather than every hour, this was also considered in finding the closest forecast result. 

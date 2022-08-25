A simple web application that shows table data of users in paginated format.

# How does this work

1. Fetching the API, it always returns 2 pages by default
2. The response also includes a paging field that should include the URL to easily fetch the next page or the previous page dependng on which button is clicked (Previous or Next)
3. On page load, the table data is fetched to show the first page(page one) from an API.
4. The “Previous” button becomes disabled when there’s no previous page to go back to (i.e on page 1)
5. When the page is still loading, the loader shows and when it stops loading, the table data shows
6. Display the records returned by the API into the 5 rows in the HTML table

# implementation

1. I forked and cloned the repository and install the packages and ran the work.
2. The html file had the skeletal structure written and I added class names to them
3. I installed parcel and the parcel transformer
4. I checked the app.ts file and created the api variable
5. I also checked the api to see how the data is being returned in order to structure my type
6. I gained access to the html tags on the app.ts file so as to enable the functionalities to be worked on using query selector
7. I also added the div for loader in the html file
8. I created a type file and structured the type having the data properties to be in this format {id: string; age: number; gender: string; row: number}
9. I created a loader function adding a style to either display or hide.
10. I created a function to help me fetch the api data using "fetch" and added the loader to either show when data is fetching and hide when the data has fetched and I called the function in the async startApp function created in the api when I cloned.
11. A function to disable the previous button is created when created when the button is on page 1
12. The result of the data fetched was then populated on the html table tags of the data I had previously connected and gain access.
13. A function was created to show if type is prev and the page is not 1, then page is decremented and fetch the table data. If the type is next, then increment the page and fetch the table data.
14. The label shows the page in which the table data is showing.

Heres's the outcome of the work
<img src="/asset/screenshot.png" />

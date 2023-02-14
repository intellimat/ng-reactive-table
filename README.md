# ng-reactive-table

This is a CRUD web application developed with **Angular 15** (check the complete stack in the section below). 
The API server pointed by the frontend returns some data (i.e. userswith some specific attributes),  while the frontend allows to *view*, *update*, and *delete* data by performing HTTPS requests. 
Filtering and pagination have been implemented as well in the frontend.


### Stack
 - Angular 15.1.4
 - NgRx
 - Angular Material
 - ngx-skeleton-loader

### Main features

 - Users can be viewed as cards or as rows in a table
 - Users can be filtered by typing on the search filter. The filter state does not change when switching between views (card view, table view). The filter looks for matches in the name or in the email address of a user.
 - A user can be edited by clicking on the :pencil2: icon placed in the table operations column. When clicking on the :heavy_check_mark: icon (which appears after having clicked on the pencil icon), an http *patch* request will be fired and a loading component (ngx-skeleton-loader) will be shown while we wait for the response. The table row will show the new edited user after receiving an ok response from the server.
 - A confirmation dialog will be shown when clicking on the :wastebasket: icon placed in the operations column. If the operation is confirmed by clicking on the "Yes" button, an http *delete* request will be fired and a loading component (ngx-skeleton-loader) will be shown while we wait for the response. The affected table row will be removed after receiving an ok response from the server.
 - A form dialog will be shown when you click on the "Add user" button. If a name, an email and a department are filled in correctly, the submit button will be enabled, and  an http *post* request (containing the new user) will be fired if the submit button has been clicked. 


### About NgRx
I personally like managing the state of an application with some flux based library. In this project NgRx is used to manage the users data, the filter and all the operations (edit, add, delete) on the users. The state has the following structure:

    { 
	     users: {
		    data: [
		      {
		        id: 1,
		        name: 'Brenden Hatchett',
		        email: 'bhatchett@eventbrite.com',
		        department: 'Legal',
		        created: '2022-07-07T12:15:00Z'
		      },
		    ],
		    loading: false,
		    searchWord: '',
		    errors: [],
		    idsOfUsersBeingUpdated: []
		}
	 }
Getting the filtered data is as easy as just calling the "selectFilteredUsers" selector, so no duplicated data gets stored.
*Pagination* has also been implemented as a selector: first users are filtered, then they are returned based on the current index and the page size.
The verbose property *IdsOfUsersBeingUpdated* is needed to manage the loading state of each single table row. A user id is pushed to this list every time we are performing an update on that user and the same user is deleted from the mentioned list every time the update request has ended. So in the table componente we use this property to check if the loading component needs to be shown on a specific row.


### Docker

Github actions have been configured so that a new image is pushed to my docker hub account every time a commit has been pushed.
Docker Image: *intellimat/ng-reactive-table*

### Deployment

The frontend has been deployed on Vercel and you can access it through the following link: https://ng-reactive-table.vercel.app/
The backend API have been deployed on another platform, but it's just a json-server so nothing cool about it!

### Last but not least
This project was implemented for fun and in relative short amount of time hence there things that can be improved!
Feel free to reach out to me, to ask me questions, give suggestions or to tell me that you appreciated this project :stuck_out_tongue_winking_eye:


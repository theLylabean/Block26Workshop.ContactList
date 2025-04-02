# Contact List Project

Creating the table
We are going to break our application into a few different components. Because our goal is to display a table of contacts, it makes sense to stay semantic and use <table> elements.

1. Read the  MDN documentation Links to an external site. and make sure you understand the correct elements associated with a <table>, including the head, row, and column.

2. In your src folder, make a new folder called components.

3. Within this folder, make your first component and call it ContactList.jsx.

4. Create a component, and name it ContactList. Make sure it is the default export from the file.

5. Next, let us set up the table, the table heading, and the column names.

Show Code
6. Notice the code comments within the { }. We will 'escape' into Javascript and map over an array of contacts here.

7, Now, navigate back to the App.jsx, import our new ContactList component, and place it within the empty React Fragments. 

Show Code
8. Navigate to the browser. You should be able to observe a simple table heading and three columns labeled "Name", "Email", and "Phone". You are now ready to create new rows for each of the contacts. You only need to add the actual contact data.

9. Before we fetch the data from the API, start by using some dummy data. Copy and paste the following dummyContacts array into our ContactList file, before the component definition NOT inside the component.

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];
10. Add this data to your application as state. Import the useState hook and use it to create contacts and setContacts variables. You can use the dummyContacts array as your default value.

const [contacts, setContacts] = useState(dummyContacts)

11. Write a console.log() statement within the component, before the return statement, and ensure you can log out all the contacts correctly.

console.log("Contacts: ", contacts)

Now that we have access to some data, consider the composition of your application. You have already broken the app up by creating a ContactList component. Since you may need to render many Table Row elements (one for each contact), creating a component specifically for that may make sense. Doing this will give you practice passing props and staying true to the Single Responsibility Principle, where each component only does one thing.

12. In your components folder, create a new file, and call it ContactRow.jsx.

13. Within this file, create a component called ContactRow and make sure to make it the default export. This component will be responsible for rendering a single Row, or tr element, with three column elements, td for the name, email, and phone number.

Think for a second. Since this new row is its own component:

Where will our Name, Email, and Phone number come from?

It needs to come from our PARENT component or the ContactList component.

14. Set up this component to take a contact object. You will render a separate ContactRow component for each contact in the ContactList component. Make sure to pass the data down as props. Your finished ContactRow component should now be like:

Show Code
15. Navigate back to your ContactList.jsx file, and import the new ContactRow into it.

 Now, contemplate what we need to do. We already have an array full of contacts. We need to render a ContactRow for each of them.

16. Delete the comments inside the { } and write a map() statement. Map over your contacts array. For each contact, return a ContactRow component. Ensure you also pass the single contact into the component as a prop.

Your ContactList component should now be like:

Show Code
17. Navigate back to the browser. You should be able to observe three new rows rendered to the page. 

Congratulations! You have set up a nice semantic structure for our table and worked on a very important aspect of React application design: Reusable Components.

Make sure you add, commit, and switch roles before moving on to the next step.

Time to fetch( ) our data.
Now you can get to the heart of what we are trying to do: fetch external data. Remember, use the browser fetch API and the useEffect hook.

1. At the top of you ContactList.jsx file, import the useEffect hook from react.

Show Code
2. Call the hook after the useState invocation and before the return statement. Remember to pass useEffect a callback function and an EMPTY dependency array. This will ensure our component will run the effect ONLY ONCE after the component has mounted.

Show Code useEffect(()=>{},[])
Take a quick moment to pause again and think about what we need to do here.

Show Answer
3. Inside the useEffect callback function, define a new asynchronous function and call it fetchContacts.

Because this function is asynchronous,  use a try catch statement which console.error's the potential error.

useEffect(() => {
  async function fetchContacts() {
    try {
      // your fetch logic will go here
    } catch (error) {
      console.error(error);
    }
  }
  fetchContacts()
}, []);
4. Now, use the fetch() API and pass it the following URL:

https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users

5. Make sure to parse the response from the API with the .json() method.

6. Test the response from the API by console logging it, and make sure you are getting an array of contacts from the API.

7. Once you have your data, use the setContacts function to reset the contacts held in state. Do not forget to also call the function after you have defined it.

Show useEffect Solution:
8. Console log your contacts state variable to double check that the data is held in state.

You have now worked on yet another pattern you will use a lot going forward in React.

Move to the next tab to continue to add more functionality.

Selected Contact View
You may have noticed that the API gives back more than just an email and phone number. Add some functionality so that when a user clicks on a specific contact row, it navigates to a separate view showing the selected contact and details about them.

1. WIth your partner, brainstorm for a moment how you might do this.
Note: You have done something very similar to this in Puppy Pals. In that example, however, all our logic was within one component, and we did not need to fetch data externally.

2. Write out the steps using pseudocode. 

3. Create a state variable to store the ID of a selected contact. Where should this variable go? 

Think about the big picture of our app. We want two separate views, one of the list and one of the selected contact. You will learn how to utilize URL routes in React in a later lesson, but for now, you need to toggle between the list of all contacts and a selected contact.

With this in mind, these two different "Views", or components, each need access to a single state value. This is a common problem that needs to be solved in React applications. 

Because you cannot share state directly from child to child (siblings), we need to put this state value in the PARENT component, then share it down to each child component via props.

Therefore, it makes sense to put this selectedContactId state variable in the App.jsx so you can conditionally render our ContactList, or SelectedContact components, and pass the state value and setter to both. 

4. Import the useState Hook into your App.jsx .

5. Create state variables for selectedContactId and setSelectedContactId and set its default value to null.

6.  Only if there is no selectedContactId, conditionally render the ContactList component. Or in other words, if the selectedContactId is null, render the ContactList component.

7. Inside the parent fragment element, open up some { }.

8. Write a ternary statement that evaluates the selectedContactId. If it is a truthy value, for now, render a div with a short message. If selectedContactId is falsey, render the ContactList component.

Full App.jsx
You should observe no change in the browser at this point. The selectedContactId is null right now, so the ContactList component is still being rendered to the browser.

Next, add functionality so that when a user clicks on a row, we can set our selectedContactId to the contact we clicked on. To do this, define an onClick property of our Table Row, which uses the setSelectedContactId() setter with the proper contact ID.

9. Pass the setSelectedContactId function into your ContactList component.

Show Code
10. Deconstruct this function from props from within the ContactList component.

Show Code
12. Add onClick to the tr element. Make sure to pass it a callback function that uses the setSelectedContactId with the current contact's ID. 

Show Code
13. Reload the application in the browser and click on a row. You should be able to observe the "Selected Contact View" message. Nice work.

Move on to the final tab, and fetch our single contact!

Fetching the Selected User
NOTE: This next section will be less guided. There will be fewer example codes. This is a chance to flex a different part of your brain and come up with the solution on your own.

So far, you have navigated to a new view by setting a specific ID into the state of the application. We can now use this ID and ask the JSONPlaceholder API for that specific user.

1. Navigate to the URL: https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/1. Links to an external site. Notice the data from the user whose ID is 1. As you change the ID in the URL, we change the user data we get. For example, if you change the end of the URL to /2, you should user 2.

The way you set this up will mirror what you just did by fetching the list of contacts. This time, however, we can add our selectedContactId dynamically to the URL we pass fetch. For example:

fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)

2.  In your components folder, create a new file and component for SelectedContact, making sure to deconstruct selectedContactId and setSelectedContactId from props. We will pass these in later.

3. Replace our div in the App.jsx with our SelectedContact component and pass it the selectedContactId and setSelectedContactId.

4. Take a moment and inspect the data we will be getting from our API: https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/1 Links to an external site.

Make sure you understand the shape of the data. Is it an object? What properties does it have? What properties do you want to display? Coming up with what you actually want to display in this component will be your own choice.

5. Navigate back to your SelectedContact component and import useState and useEffect.

6. Create state values, this time for single contact and setContact.

Think about what value this contact is going to be. You are getting an object back from our API. You could match all the values exactly, but for now, set it to null as we need to wait and fetch the data in our useEffect.

7 Call useEffect and pass it a callback and empty dependency array.

8. Define a function that uses the fetch API, and passes its URL with the selectedContactId added using template literals Links to an external site..

For example: fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`

9. Within that new function,  use your setContact with the contact from the API.

10. Console.log the contact. Can you observe the data in the console?

11.  Complete the workshop by applying what you have learned and seen. Reference the ContactList component again. Try to follow the execution flow, as you are mirroring the same process.

Stretch Goals:
11. Add a button which setSelectedContactId(null), which will trigger your contact list component to re-render, essentially "navigating" back to the List view. We will soon learn how to do that with a new package incorporating URL changes. But for now, for this small application, this solution will suffice.

12. Add CSS styling.

Deploy Your Application
To deploy your application, complete the steps in the Front End Deployment Guide. 
# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the onclick event listener runs the function attached to it, which in the case of my code is the addOne action creator
* the addOne action creator dispatches the action type to the reducer, which then runs the case for that type, adding one to the total
* that state is communicated to the component via props and mapStateToProps, and then rendered/displayed in the UI
...

* TotalDisplay shows the total plus 1.

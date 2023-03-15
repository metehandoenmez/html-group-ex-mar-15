
We will be reusing the .html files from last time

Start by editing the **form.html** file in this repo.

Create the basic html, head and body tags in the form.html file.

Add a form tag in the body tag, with action="form-data.html"
- create a div with class "form-input-container"
  - Add a label and an input tag, as described below. All inputs are **required**:
  - label "Your name:", input type text required, name="fullname"
  - label "Your email address", input type email required, name="email"
  - label "Will you bring a guest?", input is a select tag, with two option tags inside of it, with "Yes" and "No" for the options. The option tag: <option value="yes">Yes</option> , Yes/No required, name="hasGuest"
  - create an input tag of type submit.

Add another form tag, with action="form-data.html"
- create a div with class "form-input-container"
  - Add a label and an input tag, as described below. All inputs are **required**:
  - "Company:", input text
  - "Full Name:", input text
  - "Email Address:", input text,
  - "Title:", input text,
  - "Phone:", input type tel,
  - "Select a date:", input type date,
  - "Job Function", select tag, with options, name="jobfunction":
   - Project Manager
   - Backend Developer
   - Frontend Developer
   - UX/UI Designer
   - DevOps engineer
  - "Expectations:", textarea tag, required, minimum 10 characters.
  - create an input tag of type submit.

Add an a tag that links back to index.html.

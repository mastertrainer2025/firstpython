import streamlit as st

st.title("Student Registration Form")
st.subheader("Please fill in the details below")
st.text_input("Name")
st.text_input("Email")
st.text_input("Phone Number")
st.text_input("Course")
st.text_area("Address")
st.date_input("Date of Birth")
st.selectbox("Gender", ["Male", "Female", "Other"])
st.multiselect("Subjects Interested In", ["Math", "Science", "History", "Art", "Physical Education"])   
st.slider("Year of Study", 1, 5)
if st.button("Submit"):
    st.success("Registration Successful!")
    st.balloons()
    st.write("Thank you for registering!")
elif st.button("Reset"):
    st.warning("Form Reset. Please fill in the details again.")

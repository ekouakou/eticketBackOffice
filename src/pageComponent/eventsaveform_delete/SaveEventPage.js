import React from 'react';
import SidebarMenu from '../dashboard/SidebarMenu'
import Footer from '../dashboard/Footer'
import EventForm from './EventForm';
import AppHeader from '../dashboard/AppHeader'
import MyDatePicker from './MyDatePicker';
import MySelect from './MySelect';


import FileManagerCard from '../dashboard/FileManagerCard'


const SaveEventPage = () => {
  return (
    <>
        <div class="app-wrapper  flex-column flex-row-fluid  " id='kt_app_page'>
                  

                  <EventForm />

                  
                  <Footer />
              </div>
    </>
  );
};

export default SaveEventPage;

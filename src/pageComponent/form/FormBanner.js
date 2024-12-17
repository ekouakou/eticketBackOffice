import React, { useContext, useEffect, useState } from 'react';
import Switch from 'react-switch';
import { toast, ToastContainer } from 'react-toastify';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { EventContext } from '../../contexts/EventProvider';
import { handleCreate, handleFileChange, handleUpdate, handleToggleSwitch } from '../../utils/formHandlers';
import { useNavigate } from 'react-router-dom';
import { crudData } from '../../services/apiService';
import { Modal, Button, Form } from 'react-bootstrap';

const SaveBanner = () => {
  const apiUrl = "TicketManager.php";
  const apiCategorieTicketUrl = "ConfigurationManager.php";
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const { selectedEvent } = useContext(EventContext);
  const [categorieData, setcategorieData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userConnectedData'));
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    if (!user) {
      navigate(paths.signIn);
    } else {
      setUserData(user);
    }
  }, [navigate]);

  const [showPrice, setShowPrice] = useState(true);
  const [showSeat, setShowSeat] = useState(false);
  const [previewPic, setPreviewPic] = useState('');
  const [previewBanner, setPreviewBanner] = useState('');
  const [extratEditEventPicName, setextratEditEventPicName] = useState('');
  const [extratEditEventBannerName, setextratEditEventBannerName] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [categories, setCategories] = useState([{ category: '', price: '' , ndrplace: '' }]);


  const initialFormData = {
    STR_EVENAME: '',
    CATEGORIE: '',
    STR_EVEPLACE: '',
    DT_EVEBEGIN: '',
    HR_EVEBEGIN: '',
    DT_EVEEND: '',
    HR_EVEEND: '',
    LG_LSTPLACEID: '0000000000000000000000000000000000000804',
    STR_EVEANNONCEUR: '',
    STR_EVEDISPLAYROOM: 0,
    STR_EVEPRICE: '',
    // LG_AGEID: userData?.LG_AGEID,
    // LG_AGEREQUESTID: userData?.LG_AGEID,
    LG_AGEID: 1,
    LG_AGEREQUESTID: 1,
    STR_EVEDESCRIPTION: '',
    LG_LSTID: "000000000000000000000000000000000000085",
    mode: "createEvenement",
    //STR_UTITOKEN: userData?.UTITOKEN || '',
    STR_EVESTATUTFREE: 1,
    STR_EVEBANNER: null,
    STR_EVEPIC: null,
  };

  console.log("-----------------userData----------")
  console.log(userData)

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (selectedEvent) {
      const extractFileName = (path) => {
        if (!path) return '';
        const parts = path.split('/');
        return parts[parts.length - 1];
      };

      if (!previewPic) {
        setPreviewPic(selectedEvent.STR_EVEPIC);
      }
      if (!previewBanner) {
        setPreviewBanner(selectedEvent.STR_EVEBANNER);
      }

      if (!extratEditEventPicName) {
        setextratEditEventPicName(extractFileName(selectedEvent.STR_EVEPIC));
      }
      if (!extratEditEventBannerName) {
        setextratEditEventBannerName(extractFileName(selectedEvent.STR_EVEBANNER));
      }

      setFormData({
        STR_EVENAME: selectedEvent.STR_EVENAME,
        STR_EVEDESCRIPTION: selectedEvent.STR_EVEDESCRIPTION,
        DT_EVEBEGIN: selectedEvent.DT_EVEBEGIN,
        DT_EVEEND: selectedEvent.DT_EVEEND,
        HR_EVEBEGIN: selectedEvent.HR_EVEBEGIN,
        HR_EVEEND: selectedEvent.HR_EVEEND,
        STR_EVEPLACE: selectedEvent.STR_EVEPLACE,
        // STR_EVEPIC: extratEditEventPicName,
        // STR_EVEBANNER: extratEditEventBannerName,
        DT_EVECREATED: selectedEvent.DT_EVECREATED,
        DT_EVEUPDATED: selectedEvent.DT_EVEUPDATED,
        LG_AGEREQUESTID: selectedEvent.LG_AGEID,
        LG_EVEID: selectedEvent.LG_EVEID,
        LG_LSTID: selectedEvent.LG_LSTID,
        LG_LSTPLACEID: selectedEvent.LG_LSTPLACEID,
        LG_UTICREATEDID: selectedEvent.LG_UTICREATEDID,
        STR_EVEANNONCEUR: selectedEvent.STR_EVEANNONCEUR,
        STR_EVEDISPLAYROOM: selectedEvent.STR_EVEDISPLAYROOM,
        STR_EVESTATUTFREE: selectedEvent.STR_EVESTATUTFREE,
      });

      setShowPrice(selectedEvent.STR_EVESTATUTFREE === "1");
      setShowSeat(selectedEvent.STR_EVEDISPLAYROOM === "1");
    }
  }, [selectedEvent]);

  const formatDate = (dateString) => {
    const [month, day, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const handleCreateEvent = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("STR_UTITOKEN", userData.UTITOKEN);
      formDataToSend.append("mode", "createEvenement");
      Object.keys(formData).forEach((key) => {
        const value =
          key === "DT_EVEBEGIN" || key === "DT_EVEEND"
            ? formatDate(formData[key])
            : formData[key];
        formDataToSend.append(key, value);
      });

      // if (formData.STR_EVEPIC instanceof File) {
      //   formDataToSend.append("STR_EVEPIC", formData.STR_EVEPIC);
      // }
      // if (formData.STR_EVEBANNER instanceof File) {
      //   formDataToSend.append("STR_EVEBANNER", formData.STR_EVEBANNER);
      // }

      const response = await handleCreate(formDataToSend, apiUrl);
      //toast.success("Form submitted successfully");
      resetForm();
    } catch (error) {
      toast.error("Failed to submit form");
    }
  };
  

  const handleUpdateEvent = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("STR_UTITOKEN", userData.UTITOKEN);
      formDataToSend.append("LG_EVEID", selectedEvent.LG_EVEID);
      formDataToSend.append("mode", "createEvenement");
  
      Object.keys(formData).forEach((key) => {
        const value =
          key === "DT_EVEBEGIN" || key === "DT_EVEEND"
            ? formatDate(formData[key])
            : formData[key];
        formDataToSend.append(key, value);
      });
  
      if (formData.STR_EVEPIC instanceof File) {
        formDataToSend.append("STR_EVEPIC", formData.STR_EVEPIC);
      }
      if (formData.STR_EVEBANNER instanceof File) {
        formDataToSend.append("STR_EVEBANNER", formData.STR_EVEBANNER);
      }
  
      const response = await handleUpdate(formDataToSend, apiUrl);
      // Handle success toast or state update
    } catch (error) {
      toast.error("Failed to update form");
    }
  };

  useEffect(() => {
    if (userData && userData.UTITOKEN) { // Vérifiez que userData et UTITOKEN sont définis
      fetchData({ mode: 'listListe', STR_UTITOKEN: userData.UTITOKEN, LG_TYLID: "5", STR_LSTOTHERVALUE: "0000000000000000000000000000000000000783" }, apiCategorieTicketUrl, setcategorieData);
    }
  }, [userData, apiCategorieTicketUrl]);

  const fetchData = (params, url, setData) => {
    crudData(params, url)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };
  
  const handleCategoryChange = (e, index, field) => {
    const { value } = e.target;
    const newCategories = [...categories];
    newCategories[index][field] = value;
    setCategories(newCategories);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { category: '', price: '' }]);
  };

  const handleRemoveCategory = (index) => {
    if (categories.length > 1) {
      const newCategories = [...categories];
      newCategories.splice(index, 1);
      setCategories(newCategories);
    }
  };


  const resetForm = () => {
    setFormData({
      ...initialFormData,
      STR_UTITOKEN: userData?.UTITOKEN || "",
      STR_EVESTATUTFREE: 1,
    });
    setPreviewPic("");
    setPreviewBanner("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent) {
      handleUpdateEvent();
    } else {
      handleCreateEvent();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
        <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
  {/*begin::Content wrapper*/}
  <div className="d-flex flex-column flex-column-fluid">
    {/*begin::Content*/}
    <div id="kt_app_content" className="app-content  flex-column-fluid ">
      {/*begin::Content container*/}
      <div
        id="kt_app_content_container"
        className="app-container  container-fluid "
      >
        {/*begin::Form*/}
        <form
          id="kt_ecommerce_add_product_form"
          className="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework"
          data-kt-redirect="products.html"
        >
          {/*begin::Aside column*/}
          <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
            {/*begin::Thumbnail settings*/}
            <div className="card card-flush py-4">
              {/*begin::Card header*/}
              <div className="card-header">
                {/*begin::Card title*/}
                <div className="card-title">
                  <h2>Thumbnail</h2>
                </div>
                {/*end::Card title*/}
              </div>
              {/*end::Card header*/}
              {/*begin::Card body*/}
              <div className="card-body text-center pt-0">
                {/*begin::Image input*/}
                {/*begin::Image input placeholder*/}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                .image-input-placeholder {\n                    background-image: url('../../../assets/media/svg/files/blank-image.svg');\n                }\n\n                [data-bs-theme=\"dark\"] .image-input-placeholder {\n                    background-image: url('../../../assets/media/svg/files/blank-image-dark.svg');\n                }                \n            "
                  }}
                />
                {/*end::Image input placeholder*/}
                <div
                  className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                  data-kt-image-input="true"
                >
                  {/*begin::Preview existing avatar*/}
                  <div className="image-input-wrapper w-150px h-150px" />
                  {/*end::Preview existing avatar*/}
                  {/*begin::Label*/}
                  <label
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    aria-label="Change avatar"
                    data-bs-original-title="Change avatar"
                    data-kt-initialized={1}
                  >
                    <i className="ki-duotone ki-pencil fs-7">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                    {/*begin::Inputs*/}
                    <input
                      type="file"
                      name="avatar"
                      accept=".png, .jpg, .jpeg"
                    />
                    <input type="hidden" name="avatar_remove" />
                    {/*end::Inputs*/}
                  </label>
                  {/*end::Label*/}
                  {/*begin::Cancel*/}
                  <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="cancel"
                    data-bs-toggle="tooltip"
                    aria-label="Cancel avatar"
                    data-bs-original-title="Cancel avatar"
                    data-kt-initialized={1}
                  >
                    <i className="ki-duotone ki-cross fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>{" "}
                  </span>
                  {/*end::Cancel*/}
                  {/*begin::Remove*/}
                  <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="remove"
                    data-bs-toggle="tooltip"
                    aria-label="Remove avatar"
                    data-bs-original-title="Remove avatar"
                    data-kt-initialized={1}
                  >
                    <i className="ki-duotone ki-cross fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>{" "}
                  </span>
                  {/*end::Remove*/}
                </div>
                {/*end::Image input*/}
                {/*begin::Description*/}
                <div className="text-muted fs-7">
                  Set the product thumbnail image. Only *.png, *.jpg and *.jpeg
                  image files are accepted
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Thumbnail settings*/}
            {/*begin::Status*/}
            <div className="card card-flush py-4">
              {/*begin::Card header*/}
              <div className="card-header">
                {/*begin::Card title*/}
                <div className="card-title">
                  <h2>Status</h2>
                </div>
                {/*end::Card title*/}
                {/*begin::Card toolbar*/}
                <div className="card-toolbar">
                  <div
                    className="rounded-circle bg-success w-15px h-15px"
                    id="kt_ecommerce_add_product_status"
                  />
                </div>
                {/*begin::Card toolbar*/}
              </div>
              {/*end::Card header*/}
              {/*begin::Card body*/}
              <div className="card-body pt-0">
                {/*begin::Select2*/}
                <select
                  className="form-select mb-2 select2-hidden-accessible"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Select an option"
                  id="kt_ecommerce_add_product_status_select"
                  data-select2-id="select2-data-kt_ecommerce_add_product_status_select"
                  tabIndex={-1}
                  aria-hidden="true"
                  data-kt-initialized={1}
                >
                  <option />
                  <option
                    value="published"
                    selected=""
                    data-select2-id="select2-data-2-7a4x"
                  >
                    Published
                  </option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="inactive">Inactive</option>
                </select>
                <span
                  className="select2 select2-container select2-container--bootstrap5"
                  dir="ltr"
                  data-select2-id="select2-data-1-5t6c"
                  style={{ width: "100%" }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single form-select mb-2"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-kt_ecommerce_add_product_status_select-container"
                      aria-controls="select2-kt_ecommerce_add_product_status_select-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-kt_ecommerce_add_product_status_select-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Published"
                      >
                        Published
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" />
                </span>
                {/*end::Select2*/}
                {/*begin::Description*/}
                <div className="text-muted fs-7">Set the product status.</div>
                {/*end::Description*/}
                {/*begin::Datepicker*/}
                <div className="d-none mt-10">
                  <label
                    htmlFor="kt_ecommerce_add_product_status_datepicker"
                    className="form-label"
                  >
                    Select publishing date and time
                  </label>
                  <input
                    className="form-control flatpickr-input"
                    id="kt_ecommerce_add_product_status_datepicker"
                    placeholder="Pick date & time"
                    type="text"
                    readOnly="readonly"
                  />
                </div>
                {/*end::Datepicker*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Status*/}
            {/*begin::Category & tags*/}
            <div className="card card-flush py-4">
              {/*begin::Card header*/}
              <div className="card-header">
                {/*begin::Card title*/}
                <div className="card-title">
                  <h2>Product Details</h2>
                </div>
                {/*end::Card title*/}
              </div>
              {/*end::Card header*/}
              {/*begin::Card body*/}
              <div className="card-body pt-0">
                {/*begin::Input group*/}
                {/*begin::Label*/}
                <label className="form-label">Categories</label>
                {/*end::Label*/}
                {/*begin::Select2*/}
                <select
                  className="form-select mb-2 select2-hidden-accessible"
                  data-control="select2"
                  data-placeholder="Select an option"
                  data-allow-clear="true"
                  multiple=""
                  data-select2-id="select2-data-3-8n2v"
                  tabIndex={-1}
                  aria-hidden="true"
                  data-kt-initialized={1}
                >
                  <option />
                  <option value="Computers">Computers</option>
                  <option value="Watches">Watches</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Cameras">Cameras</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Household">Household</option>
                  <option value="Handbags">Handbags</option>
                  <option value="Wines">Wines</option>
                  <option value="Sandals">Sandals</option>
                </select>
                <span
                  className="select2 select2-container select2-container--bootstrap5"
                  dir="ltr"
                  data-select2-id="select2-data-4-cxfc"
                  style={{ width: "100%" }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--multiple form-select mb-2"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={-1}
                      aria-disabled="false"
                    >
                      <ul
                        className="select2-selection__rendered"
                        id="select2-26na-container"
                      />
                      <span className="select2-search select2-search--inline">
                        <textarea
                          className="select2-search__field"
                          type="search"
                          tabIndex={0}
                          autoCorrect="off"
                          autoCapitalize="none"
                          spellCheck="false"
                          role="searchbox"
                          aria-autocomplete="list"
                          autoComplete="off"
                          aria-label="Search"
                          aria-describedby="select2-26na-container"
                          placeholder="Select an option"
                          style={{ width: "100%" }}
                          defaultValue={""}
                        />
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" />
                </span>
                {/*end::Select2*/}
                {/*begin::Description*/}
                <div className="text-muted fs-7 mb-7">
                  Add product to a category.
                </div>
                {/*end::Description*/}
                {/*end::Input group*/}
                {/*begin::Button*/}
                <a
                  href="add-category.html"
                  className="btn btn-light-primary btn-sm mb-10"
                >
                  <i className="ki-duotone ki-plus fs-2" /> Create new category
                </a>
                {/*end::Button*/}
                {/*begin::Input group*/}
                {/*begin::Label*/}
                <label className="form-label d-block">Tags</label>
                {/*end::Label*/}
                {/*begin::Input*/}
                <tags
                  className="tagify form-control mb-2 tagify--noTags tagify--empty"
                  tabIndex={-1}
                >
                  <span
                    contentEditable=""
                    tabIndex={0}
                    data-placeholder="​"
                    aria-placeholder=""
                    className="tagify__input"
                    role="textbox"
                    aria-autocomplete="both"
                    aria-multiline="false"
                  />
                  ​
                </tags>
                <input
                  id="kt_ecommerce_add_product_tags"
                  name="kt_ecommerce_add_product_tags"
                  className="form-control mb-2"
                  defaultValue=""
                  tabIndex={-1}
                />
                {/*end::Input*/}
                {/*begin::Description*/}
                <div className="text-muted fs-7">Add tags to a product.</div>
                {/*end::Description*/}
                {/*end::Input group*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Category & tags*/}
            {/*begin::Weekly sales*/}
            <div className="card card-flush py-4">
              {/*begin::Card header*/}
              <div className="card-header">
                {/*begin::Card title*/}
                <div className="card-title">
                  <h2>Weekly Sales</h2>
                </div>
                {/*end::Card title*/}
              </div>
              {/*end::Card header*/}
              {/*begin::Card body*/}
              <div className="card-body pt-0">
                <span className="text-muted">
                  No data available. Sales data will begin capturing once
                  product has been published.
                </span>
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Weekly sales*/}
            {/*begin::Template settings*/}
            <div className="card card-flush py-4">
              {/*begin::Card header*/}
              <div className="card-header">
                {/*begin::Card title*/}
                <div className="card-title">
                  <h2>Product Template</h2>
                </div>
                {/*end::Card title*/}
              </div>
              {/*end::Card header*/}
              {/*begin::Card body*/}
              <div className="card-body pt-0">
                {/*begin::Select store template*/}
                <label
                  htmlFor="kt_ecommerce_add_product_store_template"
                  className="form-label"
                >
                  Select a product template
                </label>
                {/*end::Select store template*/}
                {/*begin::Select2*/}
                <select
                  className="form-select mb-2 select2-hidden-accessible"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Select an option"
                  id="kt_ecommerce_add_product_store_template"
                  data-select2-id="select2-data-kt_ecommerce_add_product_store_template"
                  tabIndex={-1}
                  aria-hidden="true"
                  data-kt-initialized={1}
                >
                  <option />
                  <option
                    value="default"
                    selected=""
                    data-select2-id="select2-data-6-sjxg"
                  >
                    Default template
                  </option>
                  <option value="electronics">Electronics</option>
                  <option value="office">Office stationary</option>
                  <option value="fashion">Fashion</option>
                </select>
                <span
                  className="select2 select2-container select2-container--bootstrap5"
                  dir="ltr"
                  data-select2-id="select2-data-5-ednl"
                  style={{ width: "100%" }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single form-select mb-2"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-kt_ecommerce_add_product_store_template-container"
                      aria-controls="select2-kt_ecommerce_add_product_store_template-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-kt_ecommerce_add_product_store_template-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Default template"
                      >
                        Default template
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" />
                </span>
                {/*end::Select2*/}
                {/*begin::Description*/}
                <div className="text-muted fs-7">
                  Assign a template from your current theme to define how a
                  single product is displayed.
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Template settings*/}{" "}
          </div>
          {/*end::Aside column*/}
          {/*begin::Main column*/}
          <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
            {/*begin:::Tabs*/}
            <ul
              className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2"
              role="tablist"
            >
              {/*begin:::Tab item*/}
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link text-active-primary pb-4 active"
                  data-bs-toggle="tab"
                  href="#kt_ecommerce_add_product_general"
                  aria-selected="true"
                  role="tab"
                >
                  General
                </a>
              </li>
              {/*end:::Tab item*/}
              {/*begin:::Tab item*/}
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link text-active-primary pb-4"
                  data-bs-toggle="tab"
                  href="#kt_ecommerce_add_product_advanced"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Advanced
                </a>
              </li>
              {/*end:::Tab item*/}
            </ul>
            {/*end:::Tabs*/}
            {/*begin::Tab content*/}
            <div className="tab-content">
              {/*begin::Tab pane*/}
              <div
                className="tab-pane fade show active"
                id="kt_ecommerce_add_product_general"
                role="tab-panel"
              >
                <div className="d-flex flex-column gap-7 gap-lg-10">
                  {/*begin::General options*/}
                  <div className="card card-flush py-4">
                    {/*begin::Card header*/}
                    <div className="card-header">
                      <div className="card-title">
                        <h2>General</h2>
                      </div>
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body pt-0">
                      {/*begin::Input group*/}
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="required form-label">
                          Product Name
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          name="product_name"
                          className="form-control mb-2"
                          placeholder="Product name"
                          defaultValue=""
                        />
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          A product name is required and recommended to be
                          unique.
                        </div>
                        {/*end::Description*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div>
                        {/*begin::Label*/}
                        <label className="form-label">Description</label>
                        {/*end::Label*/}
                        {/*begin::Editor*/}
                        <div className="ql-toolbar ql-snow">
                          <span className="ql-formats">
                            <span className="ql-header ql-picker">
                              <span
                                className="ql-picker-label"
                                tabIndex={0}
                                role="button"
                                aria-expanded="false"
                                aria-controls="ql-picker-options-0"
                              >
                                <svg viewBox="0 0 18 18">
                                  {" "}
                                  <polygon
                                    className="ql-stroke"
                                    points="7 11 9 13 11 11 7 11"
                                  />{" "}
                                  <polygon
                                    className="ql-stroke"
                                    points="7 7 9 5 11 7 7 7"
                                  />{" "}
                                </svg>
                              </span>
                              <span
                                className="ql-picker-options"
                                aria-hidden="true"
                                tabIndex={-1}
                                id="ql-picker-options-0"
                              >
                                <span
                                  tabIndex={0}
                                  role="button"
                                  className="ql-picker-item"
                                  data-value={1}
                                />
                                <span
                                  tabIndex={0}
                                  role="button"
                                  className="ql-picker-item"
                                  data-value={2}
                                />
                                <span
                                  tabIndex={0}
                                  role="button"
                                  className="ql-picker-item ql-selected"
                                />
                              </span>
                            </span>
                            <select
                              className="ql-header"
                              style={{ display: "none" }}
                            >
                              <option value={1} />
                              <option value={2} />
                              <option selected="selected" />
                            </select>
                          </span>
                          <span className="ql-formats">
                            <button type="button" className="ql-bold">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <path
                                  className="ql-stroke"
                                  d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                />{" "}
                                <path
                                  className="ql-stroke"
                                  d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                />{" "}
                              </svg>
                            </button>
                            <button type="button" className="ql-italic">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <line
                                  className="ql-stroke"
                                  x1={7}
                                  x2={13}
                                  y1={4}
                                  y2={4}
                                />{" "}
                                <line
                                  className="ql-stroke"
                                  x1={5}
                                  x2={11}
                                  y1={14}
                                  y2={14}
                                />{" "}
                                <line
                                  className="ql-stroke"
                                  x1={8}
                                  x2={10}
                                  y1={14}
                                  y2={4}
                                />{" "}
                              </svg>
                            </button>
                            <button type="button" className="ql-underline">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <path
                                  className="ql-stroke"
                                  d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                />{" "}
                                <rect
                                  className="ql-fill"
                                  height={1}
                                  rx="0.5"
                                  ry="0.5"
                                  width={12}
                                  x={3}
                                  y={15}
                                />{" "}
                              </svg>
                            </button>
                          </span>
                          <span className="ql-formats">
                            <button type="button" className="ql-image">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <rect
                                  className="ql-stroke"
                                  height={10}
                                  width={12}
                                  x={3}
                                  y={4}
                                />{" "}
                                <circle
                                  className="ql-fill"
                                  cx={6}
                                  cy={7}
                                  r={1}
                                />{" "}
                                <polyline
                                  className="ql-even ql-fill"
                                  points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                                />{" "}
                              </svg>
                            </button>
                            <button type="button" className="ql-code-block">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <polyline
                                  className="ql-even ql-stroke"
                                  points="5 7 3 9 5 11"
                                />{" "}
                                <polyline
                                  className="ql-even ql-stroke"
                                  points="13 7 15 9 13 11"
                                />{" "}
                                <line
                                  className="ql-stroke"
                                  x1={10}
                                  x2={8}
                                  y1={5}
                                  y2={13}
                                />{" "}
                              </svg>
                            </button>
                          </span>
                        </div>
                        <div
                          id="kt_ecommerce_add_product_description"
                          name="kt_ecommerce_add_product_description"
                          className="min-h-200px mb-2 ql-container ql-snow"
                        >
                          <div
                            className="ql-editor ql-blank"
                            data-gramm="false"
                            contentEditable="true"
                            data-placeholder="Type your text here..."
                          >
                            <p>
                              <br />
                            </p>
                          </div>
                          <div
                            className="ql-clipboard"
                            contentEditable="true"
                            tabIndex={-1}
                          />
                          <div className="ql-tooltip ql-hidden">
                            <a
                              className="ql-preview"
                              rel="noopener noreferrer"
                              target="_blank"
                              href="about:blank"
                            />
                            <input
                              type="text"
                              data-formula="e=mc^2"
                              data-link="https://quilljs.com"
                              data-video="Embed URL"
                            />
                            <a className="ql-action" />
                            <a className="ql-remove" />
                          </div>
                        </div>
                        {/*end::Editor*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set a description to the product for better
                          visibility.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Card header*/}
                  </div>
                  {/*end::General options*/}
                  {/*begin::Media*/}
                  <div className="card card-flush py-4">
                    {/*begin::Card header*/}
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Media</h2>
                      </div>
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body pt-0">
                      {/*begin::Input group*/}
                      <div className="fv-row mb-2">
                        {/*begin::Dropzone*/}
                        <div
                          className="dropzone dz-clickable"
                          id="kt_ecommerce_add_product_media"
                        >
                          {/*begin::Message*/}
                          <div className="dz-message needsclick">
                            {/*begin::Icon*/}
                            <i className="ki-duotone ki-file-up text-primary fs-3x">
                              <span className="path1" />
                              <span className="path2" />
                            </i>{" "}
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-4">
                              <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                                Drop files here or click to upload.
                              </h3>
                              <span className="fs-7 fw-semibold text-gray-500">
                                Upload up to 10 files
                              </span>
                            </div>
                            {/*end::Info*/}
                          </div>
                        </div>
                        {/*end::Dropzone*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Description*/}
                      <div className="text-muted fs-7">
                        Set the product media gallery.
                      </div>
                      {/*end::Description*/}
                    </div>
                    {/*end::Card header*/}
                  </div>
                  {/*end::Media*/}
                  {/*begin::Pricing*/}
                  <div className="card card-flush py-4">
                    {/*begin::Card header*/}
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Pricing</h2>
                      </div>
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body pt-0">
                      {/*begin::Input group*/}
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="required form-label">
                          Base Price
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          name="price"
                          className="form-control mb-2"
                          placeholder="Product price"
                          defaultValue=""
                        />
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set the product price.
                        </div>
                        {/*end::Description*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Discount Type
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            aria-label="Select a discount type that will be applied to this product"
                            data-bs-original-title="Select a discount type that will be applied to this product"
                            data-kt-initialized={1}
                          >
                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>{" "}
                        </label>
                        {/*End::Label*/}
                        {/*begin::Row*/}
                        <div
                          className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9"
                          data-kt-buttons="true"
                          data-kt-buttons-target="[data-kt-button='true']"
                          data-kt-initialized={1}
                        >
                          {/*begin::Col*/}
                          <div className="col">
                            {/*begin::Option*/}
                            <label
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                              data-kt-button="true"
                            >
                              {/*begin::Radio*/}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="discount_option"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                />
                              </span>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 d-block">
                                  No Discount
                                </span>
                              </span>
                              {/*end::Info*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col">
                            {/*begin::Option*/}
                            <label
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary  d-flex text-start p-6"
                              data-kt-button="true"
                            >
                              {/*begin::Radio*/}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="discount_option"
                                  defaultValue={2}
                                />
                              </span>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 d-block">
                                  Percentage %
                                </span>
                              </span>
                              {/*end::Info*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col">
                            {/*begin::Option*/}
                            <label
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                              data-kt-button="true"
                            >
                              {/*begin::Radio*/}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="discount_option"
                                  defaultValue={3}
                                />
                              </span>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 d-block">
                                  Fixed Price
                                </span>
                              </span>
                              {/*end::Info*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div
                        className="d-none mb-10 fv-row"
                        id="kt_ecommerce_add_product_discount_percentage"
                      >
                        {/*begin::Label*/}
                        <label className="form-label">
                          Set Discount Percentage
                        </label>
                        {/*end::Label*/}
                        {/*begin::Slider*/}
                        <div className="d-flex flex-column text-center mb-5">
                          <div className="d-flex align-items-start justify-content-center mb-7">
                            <span
                              className="fw-bold fs-3x"
                              id="kt_ecommerce_add_product_discount_label"
                            >
                              10
                            </span>
                            <span className="fw-bold fs-4 mt-1 ms-2">%</span>
                          </div>
                          <div
                            id="kt_ecommerce_add_product_discount_slider"
                            className="noUi-sm noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                          >
                            <div className="noUi-base">
                              <div className="noUi-connects" />
                              <div
                                className="noUi-origin"
                                style={{
                                  transform: "translate(-90.9091%, 0px)",
                                  zIndex: 4
                                }}
                              >
                                <div
                                  className="noUi-handle noUi-handle-lower"
                                  data-handle={0}
                                  tabIndex={0}
                                  role="slider"
                                  aria-orientation="horizontal"
                                  aria-valuemin={1.0}
                                  aria-valuemax={100.0}
                                  aria-valuenow={10.0}
                                  aria-valuetext={10.0}
                                >
                                  <div className="noUi-touch-area" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end::Slider*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set a percentage discount to be applied on this
                          product.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div
                        className="d-none mb-10 fv-row"
                        id="kt_ecommerce_add_product_discount_fixed"
                      >
                        {/*begin::Label*/}
                        <label className="form-label">
                          Fixed Discounted Price
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          name="dicsounted_price"
                          className="form-control mb-2"
                          placeholder="Discounted price"
                        />
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set the discounted product price. The product will be
                          reduced at the determined fixed price
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Tax*/}
                      <div className="d-flex flex-wrap gap-5">
                        {/*begin::Input group*/}
                        <div className="fv-row w-100 flex-md-root fv-plugins-icon-container">
                          {/*begin::Label*/}
                          <label className="required form-label">
                            Tax Class
                          </label>
                          {/*end::Label*/}
                          {/*begin::Select2*/}
                          <select
                            className="form-select mb-2 select2-hidden-accessible"
                            name="tax"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Select an option"
                            data-select2-id="select2-data-7-dsal"
                            tabIndex={-1}
                            aria-hidden="true"
                            data-kt-initialized={1}
                          >
                            <option data-select2-id="select2-data-9-nwae" />
                            <option value={0}>Tax Free</option>
                            <option value={1}>Taxable Goods</option>
                            <option value={2}>Downloadable Product</option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap5"
                            dir="ltr"
                            data-select2-id="select2-data-8-q8ez"
                            style={{ width: "100%" }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single form-select mb-2"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-tax-5m-container"
                                aria-controls="select2-tax-5m-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-tax-5m-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Select an option"
                                >
                                  <span className="select2-selection__placeholder">
                                    Select an option
                                  </span>
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation" />
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            />
                          </span>
                          {/*end::Select2*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set the product tax class.
                          </div>
                          {/*end::Description*/}
                          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="fv-row w-100 flex-md-root">
                          {/*begin::Label*/}
                          <label className="form-label">VAT Amount (%)</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            className="form-control mb-2"
                            defaultValue=""
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set the product VAT about.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end:Tax*/}
                    </div>
                    {/*end::Card header*/}
                  </div>
                  {/*end::Pricing*/}
                </div>
              </div>
              {/*end::Tab pane*/}
              {/*begin::Tab pane*/}
              <div
                className="tab-pane fade"
                id="kt_ecommerce_add_product_advanced"
                role="tab-panel"
              >
                <div className="d-flex flex-column gap-7 gap-lg-10">
                  {/*begin::Inventory*/}
                  <div className="card card-flush py-4">
                    {/*begin::Card header*/}
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Inventory</h2>
                      </div>
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body pt-0">
                      {/*begin::Input group*/}
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="required form-label">SKU</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          name="sku"
                          className="form-control mb-2"
                          placeholder="SKU Number"
                          defaultValue=""
                        />
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Enter the product SKU.
                        </div>
                        {/*end::Description*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="required form-label">Barcode</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          name="barcode"
                          className="form-control mb-2"
                          placeholder="Barcode Number"
                          defaultValue=""
                        />
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Enter the product barcode number.
                        </div>
                        {/*end::Description*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="required form-label">Quantity</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <div className="d-flex gap-3">
                          <input
                            type="number"
                            name="shelf"
                            className="form-control mb-2"
                            placeholder="On shelf"
                            defaultValue=""
                          />
                          <input
                            type="number"
                            name="warehouse"
                            className="form-control mb-2"
                            placeholder="In warehouse"
                          />
                        </div>
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Enter the product quantity.
                        </div>
                        {/*end::Description*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row">
                        {/*begin::Label*/}
                        <label className="form-label">Allow Backorders</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <div className="form-check form-check-custom form-check-solid mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                          <label className="form-check-label">Yes</label>
                        </div>
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Allow customers to purchase products that are out of
                          stock.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Card header*/}
                  </div>
                  {/*end::Inventory*/}
                  {/*begin::Variations*/}
                  <div className="card card-flush py-4">
                    {/*begin::Card header*/}
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Variations</h2>
                      </div>
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body pt-0">
                      {/*begin::Input group*/}
                      <div
                        className=""
                        data-kt-ecommerce-catalog-add-product="auto-options"
                      >
                        {/*begin::Label*/}
                        <label className="form-label">
                          Add Product Variations
                        </label>
                        {/*end::Label*/}
                        {/*begin::Repeater*/}
                        <div id="kt_ecommerce_add_product_options">
                          {/*begin::Form group*/}
                          <div className="form-group">
                            <div
                              data-repeater-list="kt_ecommerce_add_product_options"
                              className="d-flex flex-column gap-3"
                            >
                              <div
                                data-repeater-item=""
                                className="form-group d-flex flex-wrap align-items-center gap-5"
                              >
                                {/*begin::Select2*/}
                                <div className="w-100 w-md-200px">
                                  <select
                                    className="form-select select2-hidden-accessible"
                                    name="kt_ecommerce_add_product_options[0][product_option]"
                                    data-placeholder="Select a variation"
                                    data-kt-ecommerce-catalog-add-product="product_option"
                                    data-select2-id="select2-data-130-96pv"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                  >
                                    <option data-select2-id="select2-data-132-kimy" />
                                    <option value="color">Color</option>
                                    <option value="size">Size</option>
                                    <option value="material">Material</option>
                                    <option value="style">Style</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-131-11ge"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-kt_ecommerce_add_product_options0product_option-6o-container"
                                        aria-controls="select2-kt_ecommerce_add_product_options0product_option-6o-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-kt_ecommerce_add_product_options0product_option-6o-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Select a variation"
                                        >
                                          <span className="select2-selection__placeholder">
                                            Select a variation
                                          </span>
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Select2*/}
                                {/*begin::Input*/}
                                <input
                                  type="text"
                                  className="form-control mw-100 w-200px"
                                  name="kt_ecommerce_add_product_options[0][product_option_value]"
                                  placeholder="Variation"
                                />
                                {/*end::Input*/}
                                <button
                                  type="button"
                                  data-repeater-delete=""
                                  className="btn btn-sm btn-icon btn-light-danger"
                                >
                                  <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                          {/*end::Form group*/}
                          {/*begin::Form group*/}
                          <div className="form-group mt-5">
                            <button
                              type="button"
                              data-repeater-create=""
                              className="btn btn-sm btn-light-primary"
                            >
                              <i className="ki-duotone ki-plus fs-2" /> Add
                              another variation
                            </button>
                          </div>
                          {/*end::Form group*/}
                        </div>
                        {/*end::Repeater*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Card header*/}
                  </div>
                  {/*end::Variations*/}
                  {/*begin::Shipping*/}
                  <div className="card card-flush py-4">
                    {/*begin::Card header*/}
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Shipping</h2>
                      </div>
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body pt-0">
                      {/*begin::Input group*/}
                      <div className="fv-row">
                        {/*begin::Input*/}
                        <div className="form-check form-check-custom form-check-solid mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="kt_ecommerce_add_product_shipping_checkbox"
                            defaultValue={1}
                          />
                          <label className="form-check-label">
                            This is a physical product
                          </label>
                        </div>
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set if the product is a physical or digital item.
                          Physical products may require shipping.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Shipping form*/}
                      <div
                        id="kt_ecommerce_add_product_shipping"
                        className="d-none mt-10"
                      >
                        {/*begin::Input group*/}
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="form-label">Weight</label>
                          {/*end::Label*/}
                          {/*begin::Editor*/}
                          <input
                            type="text"
                            name="weight"
                            className="form-control mb-2"
                            placeholder="Product weight"
                            defaultValue=""
                          />
                          {/*end::Editor*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a product weight in kilograms (kg).
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="fv-row">
                          {/*begin::Label*/}
                          <label className="form-label">Dimension</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div className="d-flex flex-wrap flex-sm-nowrap gap-3">
                            <input
                              type="number"
                              name="width"
                              className="form-control mb-2"
                              placeholder="Width (w)"
                              defaultValue=""
                            />
                            <input
                              type="number"
                              name="height"
                              className="form-control mb-2"
                              placeholder="Height (h)"
                              defaultValue=""
                            />
                            <input
                              type="number"
                              name="length"
                              className="form-control mb-2"
                              placeholder="Lengtn (l)"
                              defaultValue=""
                            />
                          </div>
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Enter the product dimensions in centimeters (cm).
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Shipping form*/}
                    </div>
                    {/*end::Card header*/}
                  </div>
                  {/*end::Shipping*/}
                  {/*begin::Meta options*/}
                  <div className="card card-flush py-4">
                    {/*begin::Card header*/}
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Meta Options</h2>
                      </div>
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body pt-0">
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label">Meta Tag Title</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          className="form-control mb-2"
                          name="meta_title"
                          placeholder="Meta tag name"
                        />
                        {/*end::Input*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set a meta tag title. Recommended to be simple and
                          precise keywords.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label">
                          Meta Tag Description
                        </label>
                        {/*end::Label*/}
                        {/*begin::Editor*/}
                        <div className="ql-toolbar ql-snow">
                          <span className="ql-formats">
                            <span className="ql-header ql-picker">
                              <span
                                className="ql-picker-label"
                                tabIndex={0}
                                role="button"
                                aria-expanded="false"
                                aria-controls="ql-picker-options-1"
                              >
                                <svg viewBox="0 0 18 18">
                                  {" "}
                                  <polygon
                                    className="ql-stroke"
                                    points="7 11 9 13 11 11 7 11"
                                  />{" "}
                                  <polygon
                                    className="ql-stroke"
                                    points="7 7 9 5 11 7 7 7"
                                  />{" "}
                                </svg>
                              </span>
                              <span
                                className="ql-picker-options"
                                aria-hidden="true"
                                tabIndex={-1}
                                id="ql-picker-options-1"
                              >
                                <span
                                  tabIndex={0}
                                  role="button"
                                  className="ql-picker-item"
                                  data-value={1}
                                />
                                <span
                                  tabIndex={0}
                                  role="button"
                                  className="ql-picker-item"
                                  data-value={2}
                                />
                                <span
                                  tabIndex={0}
                                  role="button"
                                  className="ql-picker-item ql-selected"
                                />
                              </span>
                            </span>
                            <select
                              className="ql-header"
                              style={{ display: "none" }}
                            >
                              <option value={1} />
                              <option value={2} />
                              <option selected="selected" />
                            </select>
                          </span>
                          <span className="ql-formats">
                            <button type="button" className="ql-bold">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <path
                                  className="ql-stroke"
                                  d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                />{" "}
                                <path
                                  className="ql-stroke"
                                  d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                />{" "}
                              </svg>
                            </button>
                            <button type="button" className="ql-italic">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <line
                                  className="ql-stroke"
                                  x1={7}
                                  x2={13}
                                  y1={4}
                                  y2={4}
                                />{" "}
                                <line
                                  className="ql-stroke"
                                  x1={5}
                                  x2={11}
                                  y1={14}
                                  y2={14}
                                />{" "}
                                <line
                                  className="ql-stroke"
                                  x1={8}
                                  x2={10}
                                  y1={14}
                                  y2={4}
                                />{" "}
                              </svg>
                            </button>
                            <button type="button" className="ql-underline">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <path
                                  className="ql-stroke"
                                  d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                />{" "}
                                <rect
                                  className="ql-fill"
                                  height={1}
                                  rx="0.5"
                                  ry="0.5"
                                  width={12}
                                  x={3}
                                  y={15}
                                />{" "}
                              </svg>
                            </button>
                          </span>
                          <span className="ql-formats">
                            <button type="button" className="ql-image">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <rect
                                  className="ql-stroke"
                                  height={10}
                                  width={12}
                                  x={3}
                                  y={4}
                                />{" "}
                                <circle
                                  className="ql-fill"
                                  cx={6}
                                  cy={7}
                                  r={1}
                                />{" "}
                                <polyline
                                  className="ql-even ql-fill"
                                  points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                                />{" "}
                              </svg>
                            </button>
                            <button type="button" className="ql-code-block">
                              <svg viewBox="0 0 18 18">
                                {" "}
                                <polyline
                                  className="ql-even ql-stroke"
                                  points="5 7 3 9 5 11"
                                />{" "}
                                <polyline
                                  className="ql-even ql-stroke"
                                  points="13 7 15 9 13 11"
                                />{" "}
                                <line
                                  className="ql-stroke"
                                  x1={10}
                                  x2={8}
                                  y1={5}
                                  y2={13}
                                />{" "}
                              </svg>
                            </button>
                          </span>
                        </div>
                        <div
                          id="kt_ecommerce_add_product_meta_description"
                          name="kt_ecommerce_add_product_meta_description"
                          className="min-h-100px mb-2 ql-container ql-snow"
                        >
                          <div
                            className="ql-editor ql-blank"
                            data-gramm="false"
                            contentEditable="true"
                            data-placeholder="Type your text here..."
                          >
                            <p>
                              <br />
                            </p>
                          </div>
                          <div
                            className="ql-clipboard"
                            contentEditable="true"
                            tabIndex={-1}
                          />
                          <div className="ql-tooltip ql-hidden">
                            <a
                              className="ql-preview"
                              rel="noopener noreferrer"
                              target="_blank"
                              href="about:blank"
                            />
                            <input
                              type="text"
                              data-formula="e=mc^2"
                              data-link="https://quilljs.com"
                              data-video="Embed URL"
                            />
                            <a className="ql-action" />
                            <a className="ql-remove" />
                          </div>
                        </div>
                        {/*end::Editor*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set a meta tag description to the product for
                          increased SEO ranking.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div>
                        {/*begin::Label*/}
                        <label className="form-label">Meta Tag Keywords</label>
                        {/*end::Label*/}
                        {/*begin::Editor*/}
                        <input
                          id="kt_ecommerce_add_product_meta_keywords"
                          name="kt_ecommerce_add_product_meta_keywords"
                          className="form-control mb-2"
                        />
                        {/*end::Editor*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set a list of keywords that the product is related to.
                          Separate the keywords by adding a comma <code>,</code>{" "}
                          between each keyword.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Card header*/}
                  </div>
                  {/*end::Meta options*/}{" "}
                </div>
              </div>
              {/*end::Tab pane*/}
            </div>
            {/*end::Tab content*/}
            <div className="d-flex justify-content-end">
              {/*begin::Button*/}
              <a
                href="products.html"
                id="kt_ecommerce_add_product_cancel"
                className="btn btn-light me-5"
              >
                Cancel
              </a>
              {/*end::Button*/}
              {/*begin::Button*/}
              <button
                type="submit"
                id="kt_ecommerce_add_product_submit"
                className="btn btn-primary"
              >
                <span className="indicator-label">Save Changes</span>
                <span className="indicator-progress">
                  Please wait...{" "}
                  <span className="spinner-border spinner-border-sm align-middle ms-2" />
                </span>
              </button>
              {/*end::Button*/}
            </div>
          </div>
          {/*end::Main column*/}
        </form>
        {/*end::Form*/}{" "}
      </div>
      {/*end::Content container*/}
    </div>
    {/*end::Content*/}
  </div>
  {/*end::Content wrapper*/}
  {/*begin::Footer*/}
  <div id="kt_app_footer" className="app-footer ">
    {/*begin::Footer container*/}
    <div className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
      {/*begin::Copyright*/}
      <div className="text-gray-900 order-2 order-md-1">
        <span className="text-muted fw-semibold me-1">2024©</span>
        <a
          href="../../../../../../keenthemes.com/index.html"
          target="_blank"
          className="text-gray-800 text-hover-primary"
        >
          Keenthemes
        </a>
      </div>
      {/*end::Copyright*/}
      {/*begin::Menu*/}
      <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
        <li className="menu-item">
          <a
            href="../../../../../../keenthemes.com/index.html"
            target="_blank"
            className="menu-link px-2"
          >
            About
          </a>
        </li>
        <li className="menu-item">
          <a
            href="../../../../../../devs.keenthemes.com/index.html"
            target="_blank"
            className="menu-link px-2"
          >
            Support
          </a>
        </li>
        <li className="menu-item">
          <a
            href="../../../../../../themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/index.html"
            target="_blank"
            className="menu-link px-2"
          >
            Purchase
          </a>
        </li>
      </ul>
      {/*end::Menu*/}{" "}
    </div>
    {/*end::Footer container*/}
  </div>
  {/*end::Footer*/}{" "}
</div>

    </>
  );
};

export default SaveBanner;

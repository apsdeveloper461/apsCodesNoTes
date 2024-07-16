import React, { useContext, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { ThemeContext } from './Context/ThemeContext';

function FormPage() {
    const {theme}=useContext(ThemeContext)
    const [fileName,setFileName]=useState('')
    const FileUploaded=(e)=>{
        console.log(e.target.files[0].type);
        
        setFileName(e.target?.files[0]?.name)

    }
  return (
    <form id='FormData' className="w-5/6 m-auto flex-col justify-center items-center" >
      <div className="space-y-12">
        <div className={`border-b ${theme=='light'? ' border-gray-500':'border-gray-100'} pb-12`}>
          <h2 className={`ext-base font-semibold leading-7 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className={`block text-sm font-medium leading-6 ${theme === 'light'? ' text-gray-900':'text-gray-100'}`}>
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-300 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="janesmith"
                    autoComplete="username"
                    className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 ${theme=='light'? ' text-gray-900':'text-gray-200'} placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className={` w-full rounded-md border-0 py-1.5 ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <FaUserCircle aria-hidden="true" className="h-12 w-12 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                Cover photo
              </label>
              <label
                htmlFor="file-upload"
                className={`mt-2 flex justify-center cursor-pointer rounded-lg border border-dashed ${theme=='light'? ' border-gray-500':'border-gray-100'}  px-6 py-10`}
              >
                <div className="text-center">
                  <IoPhonePortraitOutline aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                  <div  id="fileUploadContainer" className="mt-4 flex items-center justify-center text-sm leading-6 text-gray-600">
                    <div
                      className="relative  cursor-pointer rounded-sm  font-bold text-purple-700  focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 hover:text-purple-700"
                    >
                      <div>Click here to Upload a file</div>
                      <input id="file-upload" name="file-upload" type="file" onChange={FileUploaded} className="sr-only" />
                    </div>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">.pdf, .doc, .docx, .ppt, .pptx and .txt</p>
                  {fileName &&
                  <p className="text-xs leading-5 text-gray-600 overflow-hidden">{fileName}</p>
                  }
                 

                </div>
              </label>

            </div>
          </div>
        </div>

        <div className={`border-b ${theme=='light'? ' border-gray-500':'border-gray-100'} pb-12`}>
          <h2 className={`text-base font-semibold leading-7 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className={`block w-full rounded-md border-0 py-1.5  ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                  />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className={`block w-full rounded-md border-0 py-1.5  ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`block w-full rounded-md border-0 py-1.5  ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                  />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country" 
                  name="country"
                  autoComplete="country-name"
                  className={` block w-full rounded-md border-0 py-2 px-2  ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className={`block w-full rounded-md border-0 py-1.5  ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className={`block w-full rounded-md border-0 py-1.5  ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                 />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  className={`block w-full rounded-md border-0 py-1.5  ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                  />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className={`block text-sm font-medium leading-6 ${theme=='light'? ' text-gray-900':'text-gray-100'}`}>
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className={`block w-full rounded-md border-0 py-1.5  ${theme=='light'? ' text-gray-900 bg-white':'text-gray-100 bg-gray-900'} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-300 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <div className="mt-6  flex items-center justify-end gap-x-6">
        <button type="button" className={`text-sm font-semibold leading-6 px-2 py-1 focus:border-2  rounded-md ${theme=='light'? ' text-gray-900  border-gray-100':'text-gray-100  border-gray-600'}`}>
          Cancel
        </button>
        <button
          type="submit"
          className={`rounded-md ${theme == 'light'? '':''} bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:outline-purple-700`}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default FormPage
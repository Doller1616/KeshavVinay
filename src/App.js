import './App.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import ApexChartPage from './ApexChart';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(7, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.string()
    .min(10, 'Require 10 digits')
    .max(10, 'Require 10 digits')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
  
});

// npm i formik yup
export const App = () => {
  const initialValues = { name: '', email: '', phone: '' };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

const ErrorMessage = ({errorMsg, isTouched}) => (errorMsg && isTouched) ? 
(<small style={{color: 'red', fontSize:'11px'}}>{errorMsg}</small>) : null;

return (
  <div>
    <h1>Signup</h1>
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="nameId"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />  
       <ErrorMessage errorMsg={formik?.errors.name} isTouched={formik?.touched.name}/>
        <br/>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <ErrorMessage errorMsg={formik?.errors.email} isTouched={formik?.touched.email}/>
       <br/>
       <label htmlFor="email">Phone</label>
       <input
         id="phone"
         name="phone"
         type="tel"
         onChange={formik.handleChange}
         value={formik.values.phone}
       />
       <ErrorMessage errorMsg={formik?.errors.phone} isTouched={formik?.touched.phone}/>
       <br/>
       <button type="submit">Submit</button>
     </form>
     <ApexChartPage/>
  </div>
)
};


export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../admin-components/Navigation';
import FormInput from '../admin-components/FormInput';

function Dashboard() {
    return (
        <div className='custom-container'>
            <Navigation />
            <FormInput/>
        </div>
    )
}    

export default Dashboard;
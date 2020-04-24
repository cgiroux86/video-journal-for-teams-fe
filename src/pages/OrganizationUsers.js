import React, {useEffect} from 'react'
import NavAndHeader from '../components/nav/NavAndHeader'
import {fetchOrganizationUsers} from '../redux/actions/organizationActions'
import { connect } from "react-redux";
import OrgMemberCard from "../components/organization/OrgMemberCard"

const OrganizationUsers = (props) => {
    
    const {defaultOrganization, selectedOrganization, fetchOrganizationUsers, organization_users} = props
    
    
    let organization_id = ''
	
	if(typeof selectedOrganization  === "undefined" ||  typeof defaultOrganization === "undefined"){
		organization_id = ''
	} else {
		organization_id = selectedOrganization.id ? selectedOrganization.id  : defaultOrganization.id
	}
    
    
    useEffect(() => {
        fetchOrganizationUsers(organization_id)
    }, [organization_id])
    console.log('sdfsdfdsfd',organization_users)

    return (
        
        <NavAndHeader>
            <div class="user-dashboard dashboard">
            <h1>All Users</h1>
            <div className="flexy">
                
        {organization_users.map(user =>  {
          return  <OrgMemberCard  data={user}/>
        })}
        </div>
        </div>
       
        </NavAndHeader>
    )
}


const mapStateToProps = (state) => ({	
    userId: state.User.userId,
    organizations: state.User.organizations,
    defaultOrganization: state.User.defaultOrganization,
    selectedOrganization: state.User.selectedOrganization,
    organization_users: state.Organization.users
});
const mapActionsToProps = {
    fetchOrganizationUsers,

};
export default connect(mapStateToProps, mapActionsToProps)(OrganizationUsers);


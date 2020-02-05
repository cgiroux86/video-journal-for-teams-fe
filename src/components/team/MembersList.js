import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchTeamMembers, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Typography, Row, Col, Button } from 'antd';
import './teamTest.css';
import MemberCard from './MemberCard';

const { Header, Content } = Layout;

function MembersList(props) {

  useEffect(() => {
    if (props.teamMembers.length === 0) {
      props.fetchTeamMembers(1);
      //props.fetchTeamMembers(props.team.id)
      console.log("Component", props.teamMembers)
    }
  }, [props, props.teamMembers]);

  if (!props.teamMembers) {
    return <h2>Loading...</h2>;
  } else {

    return (
      <Content>
        <p>Members({props.teamMembers.length})</p>
        <Row gutter={[16, 16]}>
          {/* Add member button */}
          <Col span={2}>
            <Button type="primary" shape="circle" icon="plus-circle" className="add-member" />
          </Col>

          {/* Display members */}
          {props.teamMembers.map(member => (
            <Col span={2}><MemberCard key={member.id} member={member} /></Col>
          ))}
        </Row>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  team: state.Team.team,
  teamMembers: state.Team.teamMembers
});

const mapActionsToProps = {
  fetchTeamMembers,
  setError,
  clearError
};

export default connect(mapStateToProps, mapActionsToProps)(MembersList);
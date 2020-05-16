 import React from 'react';
 import { Card, Tag, Divider } from 'antd';
 
 const AboutUs = () => {
     return(
         <div  className="header">
				<div className="TitleAndCards">
				<Card size="small" className="box">
					<Card bordered className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM20RB9-672e81ad9979-512" />}>
						<h3>Darrin Lowery</h3><Tag>Web</Tag><Tag>BEST</Tag><Tag>10/10</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars0.githubusercontent.com/u/18246524?s=460&v=4" />}>
						<h3>Kerri-Ann Bates</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars2.githubusercontent.com/u/54912919?s=460&v=4" />}>
						<h3>Sam Allen</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars1.githubusercontent.com/u/8367070?s=460&v=4" />}>
						<h3>Sofia Levin</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars2.githubusercontent.com/u/13441400?s=460&v=4" />}>
						<h3>Michael Nunes</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UHV65B6UA-1eea077dbe2f-512" />}>
						<h3>Kyla Oyamot</h3><Tag>UX</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UJB5Y3VS4-52dc043b8f1e-512" />}>
						<h3>Marcus Jones</h3><Tag>Team Lead</Tag>
					</Card>
					<Card className="person" hoverable>
						<h3>Github</h3>
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe" target="_blank">Frontend</a>
						<br />
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-be" target="_blank">Backend</a>
						<br /> 
						<a href="https://alpacavid-api-doc.netlify.com/" target="_blank">API Documentation</a>
						<Divider />
						<h3>Alpaca Drawing</h3>
						<p>DeLenn Lowery</p>
					</Card>
				</Card>
				</div>
</div>
     )
 }
 

export default AboutUs;
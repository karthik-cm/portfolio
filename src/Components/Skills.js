import React from 'react';
import '../CSS/Skills.css';

import SkillsCard from './Generic/SkillsCard';

// Import Logos
import JAVA_LOGO_URL from '../Logos/Skills/java.svg';
import JAVASCRIPT_LOGO_URL from '../Logos/Skills/javascript.svg';
import PYTHON_LOGO_URL from '../Logos/Skills/python.svg';
//import CPP_LOGO_URL from '../Logos/Skills/cpp.svg';

import ORACLE_LOGO_URL from '../Logos/Skills/oraclesql.svg';
import MYSQL_LOGO_URL from '../Logos/Skills/mysql.svg';
import SQLLITE_LOGO_URL from '../Logos/Skills/sqlite.svg';
import MONGODB_LOGO_URL from '../Logos/Skills/mongodb.svg';

import SPRING_LOGO_URL from '../Logos/Skills/spring.svg';
import HIBERNATE_LOGO_URL from '../Logos/Skills/hibernate.svg';

import HTML5_LOGO_URL from '../Logos/Skills/html5.svg';
import CSS3_LOGO_URL from '../Logos/Skills/css3.svg';
import BOOTSTRAP_LOGO_URL from '../Logos/Skills/bootstrap.svg';
import JQUERY_LOGO_URL from '../Logos/Skills/jquery.svg';
import REACTJS_LOGO_URL from '../Logos/Skills/reactjs.svg';

import JSON_LOGO_URL from '../Logos/Skills/json.png';
import GIT_LOGO_URL from '../Logos/Skills/git.svg';
import SELENIUM_LOGO_URL from '../Logos/Skills/selenium.svg';

import DOCKER_LOGO_URL from '../Logos/Skills/docker.svg';
import KUBERNETES_LOGO_URL from '../Logos/Skills/kubernetes.svg';
import AWS_LOGO_URL from '../Logos/Skills/aws.svg';



// Website - icons8
// https://icons8.com/icons/set/technical-skills

const PROG_SKILLS = {
	'java': ['Java', JAVA_LOGO_URL],
	'javascript': ['JavaScript', JAVASCRIPT_LOGO_URL],
	'python': ['Python', PYTHON_LOGO_URL]
	// 'cpp': ['C++', CPP_LOGO_URL]
};

const DB_SKILLS = {
	'oraclesql': ['Oracle SQL', ORACLE_LOGO_URL],
	'mysql': ['MySQL', MYSQL_LOGO_URL],
	'sqlite': ['SQLite', SQLLITE_LOGO_URL],
	'mongodb': ['MongoDB', MONGODB_LOGO_URL],

};

const FW_SKILLS = {
	'spring': ['Spring', SPRING_LOGO_URL],
	'hibernate': ['Hibernate', HIBERNATE_LOGO_URL]
};

const WEB_SKILLS = {
	'html5': ['HTML5', HTML5_LOGO_URL], 
	'css3': ['CSS3', CSS3_LOGO_URL],
	'bootstrap': ['Bootstrap', BOOTSTRAP_LOGO_URL],
	'jquery': ['jQuery', JQUERY_LOGO_URL],
	'reactjs': ['ReactJs', REACTJS_LOGO_URL]
};

const OTHER_SKILLS = {
	'json': ['JSON', JSON_LOGO_URL],
	'git': ['Git', GIT_LOGO_URL],
	'selenium': ['Selenium', SELENIUM_LOGO_URL]
}

const CLOUD_SKILLS = {
	'docker' : ['Docker', DOCKER_LOGO_URL],
	'kubernetes' : ['Kubernetes', KUBERNETES_LOGO_URL],
	'aws': ['AWS', AWS_LOGO_URL]
}



const Skills = () => {
	return (
		<div id="skills" className="Skills container-fluid pt-5">
			<div className="row">
				<h1 className="section-heading">Skills</h1>
			</div>

			{/* PROGRAMMING */}
			<div className="programming">
				<h3>Programming</h3>
			</div>
			<div className="programming-skills pt-3">
				<div>
					<SkillsCard title={PROG_SKILLS.java[0]} image_url={PROG_SKILLS.java[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={PROG_SKILLS.python[0]} image_url={PROG_SKILLS.python[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={PROG_SKILLS.javascript[0]} image_url={PROG_SKILLS.javascript[1]}></SkillsCard>
				</div>
			</div>



			{/* DATABASES */}
			<div className="databases pt-5">
				<h3>Databases</h3>
			</div>
			<div className="databases-skills pt-3">
				<div>
					<SkillsCard title={DB_SKILLS.mysql[0]} image_url={DB_SKILLS.mysql[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={DB_SKILLS.oraclesql[0]} image_url={DB_SKILLS.oraclesql[1]}></SkillsCard>
				</div>
				
				<div className="gap"></div>
				<div>
					<SkillsCard title={DB_SKILLS.sqlite[0]} image_url={DB_SKILLS.sqlite[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={DB_SKILLS.mongodb[0]} image_url={DB_SKILLS.mongodb[1]}></SkillsCard>
				</div>
			</div>



			{/* FRAMEWORKS */}
			<div className="frameworks pt-5">
				<h3>Frameworks</h3>
			</div>
			<div className="frameworks-skills pt-3">
				<div>
					<SkillsCard title={FW_SKILLS.spring[0]} image_url={FW_SKILLS.spring[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={FW_SKILLS.hibernate[0]} image_url={FW_SKILLS.hibernate[1]}></SkillsCard>
				</div>
			</div>



			{/* WEB TECHNOLOGIES */}
			<div className="web-technologies pt-5">
				<h3>Web Technologies</h3>
			</div>
			<div className="web-technologies-skills pt-3">
				<div>
					<SkillsCard title={WEB_SKILLS.html5[0]} image_url={WEB_SKILLS.html5[1]}></SkillsCard>
				</div>
				
				<div className="gap"></div>
				<div>
					<SkillsCard title={WEB_SKILLS.css3[0]} image_url={WEB_SKILLS.css3[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={WEB_SKILLS.bootstrap[0]} image_url={WEB_SKILLS.bootstrap[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={WEB_SKILLS.jquery[0]} image_url={WEB_SKILLS.jquery[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={WEB_SKILLS.reactjs[0]} image_url={WEB_SKILLS.reactjs[1]}></SkillsCard>
				</div>
			</div>



			{/* OTHER */}
			<div className="other-technologies pt-5">
				<h3>Other</h3>
			</div>
			<div className="other-technologies-skills pt-3">
				{/* <div>
					<SkillsCard title={OTHER_SKILLS.json[0]} image_url={OTHER_SKILLS.json[1]}></SkillsCard>
				</div> */}

				<div className="gap"></div>
				<div>
					<SkillsCard title={OTHER_SKILLS.git[0]} image_url={OTHER_SKILLS.git[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={OTHER_SKILLS.selenium[0]} image_url={OTHER_SKILLS.selenium[1]}></SkillsCard>
				</div>
			</div>



			{/* Cloud */}
			<div className="cloud-technologies pt-5">
				<h3>Cloud</h3>
			</div>
			<div className="cloud-technologies-skills pt-3">
				<div className="gap"></div>
				<div>
					<SkillsCard title={CLOUD_SKILLS.docker[0]} image_url={CLOUD_SKILLS.docker[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={CLOUD_SKILLS.kubernetes[0]} image_url={CLOUD_SKILLS.kubernetes[1]}></SkillsCard>
				</div>

				<div className="gap"></div>
				<div>
					<SkillsCard title={CLOUD_SKILLS.aws[0]} image_url={CLOUD_SKILLS.aws[1]}></SkillsCard>
				</div>
			</div>

		</div>
	)
}

export default Skills
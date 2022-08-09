import NavItem from "./navigation.js" 

// Nav Item Sections //
const aboutMePage = new NavItem(
    "aboutMe",
    "About Me",
    `
    <!-- ***********************  ABOUT / PROFILE  *********************** -->
        <header>
            <div class="container center-align">

                <h1 class="font_bold orange-text">Valores Medina</h1>
                <h5 class="font_bold yellow-text job-title">Software Developer / Former IT</h3>

                <p class="font_reg" style="font-size: medium">
                4 years’ experience as
                acting overnight team lead, 5 years’ IT customer service, along with earning
                certifications in HTML, CSS, JavaScript, Python, Java, Cg#, and SQL.
                </p>
            </div>
        </header>
    `,
    "./images/code.jpg",
    "./images/code2.jpg", 
);
// header0, center1, textWrap2, textColor3, footer4
aboutMePage.setupColorArray("orange", "blue lighten-1", "blue darken-1", "white-text", "red lighten-3")

const projects = new NavItem(
    "projects",
    "Projects",
    `<!-- ********************  PROJECTS / PORTFOLIO  ********************* -->
    <section class="">
        <div class="container">
          <div class="center-align">
            <h2 class="green-text text-lighten-2 job-title">Featured Project</h2>
            <p style="font-size: medium">Along with creating this website from scratch 
            I have been working on an OpenGL game engine.</p>
            <!-- <p class="font_reg">View some of my projects below.</p> -->
          </div>

        <!-- Project 1 -->
        <div class="row offset-s2 z-depth-2 floatingWindow">
            <section class="project-item center-align">
                <br></br>
                <div class="col 12">
                <img src="images/project1thumbnail.jpg" alt="engine demonstrating shader">
                <div class="col 12">
                <h3 class="orange-text" style="text-decoration:underline dotted white">OpenGL Game Engine</h3>
                <p>During the last few weeks I learned C++ and attempted to create a game engine from scratch as a personal challenge 
                of my coding skills. While working on this project I gained knowledge of the graphics pipeline, which inspired me to code my own mathematics 
                script similar to GLM (OpenGL Math) to grasp how each matrix truly interacts with each other. Unfortunately due to a 
                lack of time to work on this issue I will be making this directory public.</p>
                <a href="https://github.com/val742/ValorEngine" target="_blank" class="yellow-text">View project</a>
                <br></br>
                </div>                
            </section> 
        <!-- End of Project block. -->
        </div>
        <br></br>
    </section>`,
    "./images/code.jpg",
    "./images/code2.jpg"
);
// header0, center1, textWrap2, textColor3, footer4
projects.setupColorArray("orange", "blue lighten-1", "blue darken-1", "white-text", "red lighten-3")

const workExperience = new NavItem(
    "workExperience",
    "Work Experience",
    `<!-- ***********************  WORK EXPERIENCE  *********************** -->
    <section class="center-align">
      <h2 class="orange-text">Work Experience</h2>
      <section class="job-item">
        <div class="job-title">
          <h4>Tech Support Level 1: Outage Coordinator</h3>
        </div>
        <div class="blue darken-3 job-summary">
          <p>Employed By: <br>IBM <br> January 2017 to September 2021</p>
        
          <p>Overview: Started with IBM as Tech Support Level I contracted employee for Amex helpdesk and 
          quickly promoted to permanent Outage Coordinator. Helped build Anthem and Blue Cross 
          helpdesk from ground up. Acted as overnight team lead for 4 years. Became certified in 
          Dell repairs and acquired CompTIA Network+ Certification N10-006. </p>
          <p>Scope: Assist end-users with troubleshooting. Create incident tickets, forwarding to appropriate 
          departments. Prevent service desk downtime by creating outage tickets and monitoring call volume. 
          Go onsite and repair PCs for Dell customers. Set up and prepare routes for repair appointments. 
          Keep metrics by working alongside agents on calls and investigating potential outages.</p>
          <p>Achivements during my employment:</p>
          <ul class="browser-default">
            <li>
              Got Suicide Emergency 24-Hour line up and running within 1
              hour of error which had placed emergency number in
              holiday mode.
            </li>
              <ul class="browser-default">
                <li>
                  Collaborated with emergency team to collect data then
                  escalated to technical operations center.
                </li>
                <li>
                  Prepared new issue reporting method to minimize future
                  downtime occurrences.
                </li>
              </ul>
            <li>
              Steered effort to address widespread bluescreen error affecting
              >2K PCs.
            </li>
            <ul class="browser-default">
            <li>
              Drafted ticket while performing all possible troubleshooting
              steps, then setup interactive voice recording to alleviate call
              volume.
            </li>
            <li>
              Brought technical operations team on board, then ensured
              transition of ongoing outage was handled from night to day teams.
            </li>
            </ul>
            <li>
              Reset 14 user passwords and verified user functionality in single
              &lt;12-minute call, preventing negative impact to call-length
              performance reporting.
            </li>
            <li>
              Helmed urgent call from vice president, which required password
              reset and technical  troubleshooting.
            </li>
            <li>
              Resolved time-sensitive issues within 20 minutes while following
              all security processes. Formally recognized by VP for
              outstanding work.
            </li>
          </ul>
        </div>
      </section>
      <!-- Job 2 -->
      <section class="job-item">
        <div class="job-details">  
          <h3 class="job-title">Field Technician</h3>
        </div>
        <div class="blue darken-3 job-summary">
          <p>Employed By: <br>F2OnSite</p>
          <p>
            While working at Panera bread, I got a second job working with F2OnSite. 
            This allowed me to jump back into IT, repairing laptops, tablets, desktops, and
            servers on and offsite for clients.
          </p>
        </div>
      </section>

      <!-- Job 3 -->
      <section class="job-item">
        <div class="job-details">
          <h3 class="job-title">Server Migration Contractor</h3>
        </div>
        <div class="blue darken-3 job-summary">
        
          <p>Employed By: <br>Ebix</p>
        
          <p>Contracted to disassemble remote data center. Wiped drives and parted 
          out-of-date hardware. Inventoried and shipped hardware to headquarters.</p>

        </div>
        <br>
      </section>
      <!-- End of Job block. -->
    </div>
  </section>`,
    "./images/code.jpg",
    "./images/code2.jpg"
);
// header0, center1, textWrap2, textColor3, footer4
workExperience.setupColorArray("orange", "blue lighten-1", "blue darken-1", "white-text", "red lighten-3")

const education = new NavItem(
    "education",
    "Education",
    `<!-- ******************  EDUCATION & CERTIFICATIONS ****************** -->
    <section class="center-align">
      <div class="content-wrap item-details">
      <h2 class="yellow-text underline--double">Education</h2>

      <!-- Copy this whole <section> block to add more schools. -->
      <section>
          <h3 class="orange-text lighten-3" style="text-decoration:underline dotted white">LinkedIn Learning</h3>
          <p>During the past months I have earned multiple certifications through LinkedIn to gain
          the knowledge needed to become a software developer.</p>
          <p>Certifications earned: </p>
          <ul class="highlight">
            <li>HTML Essential Training</li>
            <li>CSS Essential Training</li>
            <li>JavaScript Essential Training</li>
            <li>Learning C++</li>
            <li>Learning Python</li>
            <li>Learning C#</li>
            <li>Learning SQL</li>
            <li>Plus <a class="yellow-text"href="https://www.linkedin.com/in/valores742/">more!</a>
          </ul>
          <h3 class="orange-text lighten-3" style="text-decoration:underline dotted white">Prairie View High School - Henderson</h3>
          <p>I'm a highschool graduate, during my years I spent a lot of my personal 
          time learning C++ and working with Unreal Engine 3. After school I pushed to gain a Network+ Certification 
          and I was able to secure a job at IBM.</p>
          <br></br>
        </section>
        <!-- End of School block. -->
      </div>
    </section>`,
    "./images/code.jpg",
    "./images/code2.jpg"
);
// header0, center1, textWrap2, textColor3, footer4
education.setupColorArray("orange", "blue lighten-1", "blue darken-1", "white-text", "red lighten-3")

const navItemArray = [aboutMePage, projects, workExperience, education];
navItemArray.forEach(
  function(item, index){
    item.indexNum = index;
  }
)
// console.log(navItemArray)
export default navItemArray;
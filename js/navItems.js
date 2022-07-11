import NavItem from "./navigation.js" 

// Nav Item Sections //
const aboutMePage = new NavItem(
    "aboutMe",
    "About Me",
    `
    <!-- ***********************  ABOUT / PROFILE  *********************** -->
        <header>
            <div class="container">

                <h1>Valores Medina</h1>
                <h3>Software Developer / Former IT</h3>

                <p>
                4 years’ experience as
                acting overnight team lead, 5 years’ IT customer service, along with earning
                certifications in HTML, CSS, JavaScript, Python, Java, C#, and SQL.
                </p>
            </div>
        </header>
    `,
    "./images/code.jpg",
    "./images/code2.jpg"
);
const projects = new NavItem(
    "projects",
    "Projects",
    `<!-- ********************  PROJECTS / PORTFOLIO  ********************* -->
    <section class="">
        <div class="container">
            <h2>Featured Projects</h2>
            <p>View selected projects below. More information can be found at 
                <a href="#">my homepage</a>.</p>

        <!-- Project 1 -->
            <section class="project-item">
                <!--<img src="images/thumbnail.jpg" alt="coffee cup on a desk">-->
                <h3>Project Name</h3>
                <p>Summary or description of the project and/or your role in it. Add as many paragraphs as you need.</p>
                <a href="#" target="_blank">View project / case study</a>
            </section>
        <!-- End of Project block. -->
        <!-- Project 2 -->
        <section class="project-item">
        <!--<img src="images/thumbnail.jpg" alt="coffee cup on a desk">-->
            <h3>Project Name</h3>
            <p>Summary or description of the project and/or your role in it. Add as many paragraphs as you need.</p>
            <a href="#" target="_blank">View project / case study</a>
        </section>
    <!-- End of Project block. -->
        </div>
    </section>`,
    "./images/code.jpg",
    "./images/code2.jpg"
);
const workExperience = new NavItem(
    "workExperience",
    "Work Experience",
    `<!-- ***********************  WORK EXPERIENCE  *********************** -->
    <section class="work-experience">
      <h2>Work Experience</h2>
      <section class="job-item">
        <div>
          <h3>Tech Support Level 1, Outage Coordinator</h3>
          <p>IBM</p>
          <p>January 2017 to September 2021</p>
        </div>
        <div class="job-summary">
          <p>Job summary goes here. Add as many paragraphs as you need.</p>
          <p>Optional list:</p>
          <ul>
            <li>
              Got Suicide Emergency 24-Hour line up and running within 1
              hour of error which had placed emergency number in
              holiday mode.
            </li>
            <li>
              Collaborated with emergency team to collect data then
              escalated to technical operations center.
            </li>
            <li>
              Prepared new issue reporting method to minimize future
              downtime occurrences.
            </li>
            <li>
              Steered effort to address widespread bluescreen error affecting
              >2K PCs.
            </li>
            <li>
              Drafted ticket while performing all possible troubleshooting
              steps, then setup interactive voice recording to alleviate call
              volume.
            </li>
            <li>
              Brought technical operations team on board, then ensured
              transition of ongoing outage was handled from night to day teams.
            </li>
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
          <h3>Field Technician</h3>
          <p>F2OnSite</p>
          <p>January 2015 to December 2015</p>
        </div>
        <div class="job-summary">
          <p>
            Jumped back into IT, repairing laptops, tablets, desktops, and
            servers on and offsite for clients.
          </p>
        </div>
      </section>

      <!-- Job 3 -->
      <section class="job-item">
        <div class="job-details">
          <h3>Job title</h3>
          <p>Company Name</p>
          <p>Date at job</p>
        </div>
        <div class="job-summary">
          <p>Job summary goes here. Add as many paragraphs as you need.</p>
          <a class="btn" href="#">BTNSomethingFunny</a>
          <a href="#">SomethingFunny</a>
          <p>Optional list:</p>
          <ul>
            <li>Delete this list if you don't need it.</li>
            <li>Created...</li>
            <li>Lead...</li>
            <li>Responsible for...</li>
          </ul>
        </div>
      </section>
      <!-- End of Job block. -->
    </div>
  </section>`,
    "./images/code.jpg",
    "./images/code2.jpg"
);
const education = new NavItem(
    "education",
    "Education",
    `<!-- ******************  EDUCATION & CERTIFICATIONS ****************** -->
    <section class="education">
      <div class="content-wrap item-details">
      <h2>Education</h2>

      <!-- Copy this whole <section> block to add more schools. -->
      <section>
          <h3>Prairie View High School - Henderson</h3>
        </section>
        <!-- End of School block. -->
      </div>
    </section>`,
    "./images/code.jpg",
    "./images/code2.jpg"
);


const navItemArray = [aboutMePage, projects, workExperience, education];
navItemArray.forEach(
  function(item, index){
    item.indexNum = index;
  }
)
export default navItemArray;
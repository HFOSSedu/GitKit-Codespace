var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Overview",
  "body": " Overview   The GitKit introduces students to fundamental git and GitHub skills and concepts and the forking workflow within the context of an authentic Free and Open Source Software (FOSS) project.  The GitKit is designed to be used as a module within a course where students are first introduced to git and GitHub, but has been adapted for use in other settings. A nominal use of the GitKit requires four 75-minute class periods where the instructor introduces each chapter and four 2-3 hour homework assignments where concepts are reinforced and students gain hands-on experience.  This GitKit text provides:   A complete instructor guide ( ).    Slide decks with in-class activities that can be used to introduce each chapter.    Chapters that guide students through exercises that reinforce concepts from class and give them hands-on experience with git and GitHub.    An easy to setup cloud-based development environment in which students complete the hands-on exercises.    The project artifacts (repository, code, documentation, issues) that provide the context of an authentic FOSS project.      "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " In addition to the authors many others have helped in the production of the GitKit in various ways, including conversations, guidance, critiques and providing feedback from pilot uses in their courses. These following individuals have provided substantial help in one or more of these ways:  Michael Caines  Heidi Ellis  Greg Hislop  Clif Kussmaul  Emily Lovell  Cam Macdonell    The authors have been active in the Teaching Open Source community. Many of the resources on their Learning Resources page have informed the exercises in the GitKit.  This work was supported under National Science Foundation Grants DUE-2012966 , DUE-2013069 , DUE-2012979 , DUE-2012999 , and DUE-2012990 . Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of NSF.  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "topic-instructor-intro",
  "level": "1",
  "url": "topic-instructor-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Instructor Guide Introduction",
  "body": " Instructor Guide Introduction   This instructor guide contains everything you need to know to use GitKit in your course. gives a concise guide that may be sufficient if you have used GitKit previously and just need the bare minimum of reminders of what to do. provides a more detailed guide to getting familiar with the GitKit and using it in your course.  For help with GitKit, you can chat with us on Discord.     Quick Start  This quick start guide provides a very brief outline of the steps necessary to use the GitKit in a course. It is intended to be sufficient for instructors who have used the GitKit previously and just need a reminder of the necessary steps. provides a more detailed guide to adopting the GitKit for use in a course.    Create a Runestone course using the GitKit text     Copy the Course Pack for the GitKit from the gitkitlinux base course into your course if you would like to use the provided assignments.  Note that the reading assignments in the course pack include sections that allow students to elect to participate in a research project aimed at (1) understanding what they think and know about open source tools and techniques and (2) assessing the effectiveness of the GitKit. The inclusion of these sections is option and may be removed at the discretion of the instructor. See for additional information.     Manage the students in your course either by registering them or by having them self-register.    Click to Deploy the GitKit FarmData2 repository to use as the upstream.  One deploy of the GitKit FarmData2 repository can support up to 32 students. Perform as many deploys as necessary for your course. Be sure to give each deploy a distinct name.    Copy the URL(s) of the deployed GitKit FarmData2 upstream(s) and make it (them) available to your class.    Please consider clicking the link to the brief survey that is included in the output of the GitKit deployer. Your feedback helps us to better understand where and how the GitKit is being used. This survey can also be accessed here .    Review the chapters, slides and instructor notes in , and create assignments as appropriate for your course.    Review and merge student Pull Requests into the upstream just before or during the class that covers .    Merge the addRound2Conflicts branch into the upstream just before or during the class that covers .       Adopting and Using the GitKit  This section outlines a process for learning more about the GitKit and adopting it for use in a course.   Read to understand the basic structure of the GitKit and the variety of ways that it has been delivered to learners.    Read to learn about the key concepts, terminology and skills contained in each chapter of the GitKit.    Read to learn about the two development environments that can be used with the GitKit and select one for use in your course.    Read : to learn just a little bit about the FarmData2 project that was used to create the GitKit.    Consider doing the GitKit for yourself as described in . It is by far the best way to prepare to deliver the GitKit to a class.    Follow the steps in to create a Runestone course using the GitKit text for your class.    Follow the steps in to deploy the GitKit for use in your course.    Refer to for links to the chapters, the class slides, and instructor notes as you teach each chapter of the GitKit.    Refer to for information about contributing to the GitKit including where to report typos, errors, suggested improvements or bugs.       Delivering GitKit  The GitKit content is broken into 4 chapters (See ). Each chapter of the text contains the set of hands-on exercises to be completed by the students. These exercises are not intended to stand alone. They require some prior introduction to the concepts and terminology that they use. A separate set of slides are provided that instructors can use or adapt to introduce the necessary concepts and terminology before students complete the hands-on exercises.  In a nominal use of the GitKit:   The instructor introduces each chapter by using or adapting the provided slides in a 50-75 minute class period.    Students complete the hands-on activities contained in the chapters of this text as 2-3 hours of homework or during an assigned lab period.     While the GitKit was designed for nominal delivery in four 50-75-minute periods with 2-3 hours of additional hands-on work by the students, instructors have found the GitKit to be adaptable to different educational settings, student experience levels and learning objectives.   Limited Coverage: The first two GitKit topics form a cohesive unit and can be completed without continuing onto the final two topics. Two examples of how this can be used include:    Lower Level Courses: In lower level courses, or with less experienced students, the first two topics could be spread over a longer time with the hands-on activities being completed in class.    A One Day Workshop: An organization delivered the GitKit as a one-day workshop for students from low-income, first-generation, underrepresented minority backgrounds. This workshop covered just the first two GitKit topics.    Students with Prior git Experience: An instructor with students who have had prior exposure to git fundamentals (but not GitHub or the forking workflow) have skipped most of the class materials and used the hands-on activities as in-class lab activities rather than homework.    Alternative In-Class Activities: Instructors have had success using Process Oriented Guided Inquiry (POGIL) activities in class in place of the slides provided with GitKit.       GitKit Content  The content of the GitKit is broken into the chapters below. For each chapter the key topics and activities are outlined and links are given to the slides, the chapter of the text containing the hands-on exercises and instructor notes for the chapter.       Introduces Free and Open Source Software (FOSS) communities, and how they collaborate using Git, GitHub and the forking workflow.    Provides hands-on practice with the issue tracker, and forking and cloning of a repository.           Introduces feature branches, commits, and pull requests as part of the forking workflow.    Provides practice with creating and switching branches, staging and committing changes, pushing branches to origin and submitting pull requests.           Introduces how merges into the upstream can result in a developer's origin and clone becoming out of synch, and explains how to re-synchronize.    Provides practice with setting an upstream remote, pulling (non-conflicting) changes from upstream, and deleting feature branches. The exercises also provide repetition of practice with the skills from the previous chapters.           Introduces how merging of changes into the upstream can lead to merge conflicts, how they are found and represented, and how they can be resolved.    Provides practice with understanding merge conflicts, merging main into a feature branch, using a graphical merge tool and updating a pull request.          Student Development Environments   The GitKit provides a cloud based development environment that students use to complete the hands-on GitKit activities. This development environment is called a KitClient . A KitClient is a pre-configured containerized development environment that provides all of the tools and configuration necessary to complete the activities. The KitClient also includes the Kit-tty Virtual Assistant (See and a set of automations that simulate project community (See ).  There are currently two KitClients that can be used with GitKit and the instructor may choose the KitClient to use based on the needs of their course and students.    Linux Desktop KitClient : shows the Linux KitClient where students complete the hands-on activities in a complete Linux virtual desktop environment.  The Linux KitClient development environment.   The Linux KitClient development environment window displaying the Linux desktop.        VSCode KitClient : shows the VSCode KitClient in which students complete the hands-on activities in the VSCode interface.  The VSCode development environment.   The VSCode development environment window showing the VS Code interface.      Both of these KitClients run remotely within GitPod Workspaces and students interact with them through a Web browser. To run a KitClient, students will need will need to have a free GitPod account, which they will created as a part of the activities.  There is a different edition of this text for each of the KitClients. The texts provide an equivalent experience, but adapt content to the specifics (e.g. user interface elements) of the KitClient as necessary. The instructor will adopt the text for the KitClient that has been chosen for the course (see ).    The Kit-tty Virtual Assistant  The Kit-tty (a play on Kit and TTY), pronounced kitty, is a virtual assistant built into the development environments (i.e. KitClients) that catches common student errors and provides hints on how to perform activity steps correctly. The Kit-tty has been designed to catch and correct student errors that were frequently observed in early uses of the GitKit. Many of the errors recognized by the Kit-tty are those that typically are not discovered until students progress several steps further into the activity, at which point they require more advanced git skills to undo.  For example, the Kit-tty intervenes when a student attempts to:   commit to the main branch (an action that should not happen in the forking workflow).    merge a feature branch into main (instead of vice versa).    set the upstream remote to the origin (instead of the upstream).    clone the upstream (rather than their fork).    clone one repository inside of another.       Community Automations  Community automations perform actions and comment on tickets in the issue tracker and on pull requests. These actions and comments are designed to simulate some common types of interaction with project maintainers and other FOSS community at appropriate points in the learning activities.  For example:   When claiming an issue by adding a comment to its ticket in the issue tracker. An automation notices this comment, assigns the issue to the student (if it hasn't already been assigned to someone else). The automation then also responds personally as a maintainer might: \"Great! I assigned you (@TheirUsername) to the issue. Have fun working on it!\"        The FarmData2 Project  The upstream repository deployed by the GitKit was captured from the FarmData2 project . FarmData2 aims to support farmers in the day-to-day operation and record keeping needs of their small organic diversified vegetable farms.  While FarmData2 focuses on farming operations, students completing the GitKit activities work only with documentation files in markdown. Thus, there is no farming knowledge required to compete the GitKit.  Current development work on FarmData2 is occurring in the FarmData2 Organization on GitHub.    Creating a Runestone Course using the GitKit Text  The GitKit text is an e-text that is available on Runestone Academy . It contains a large number of interactive elements, many of which are auto-graded and provide instant feedback to students as they work through the GitKit. If you are not familiar with Runestone Academy it is recommended that you read the first 6 sections of the Using eBooks with Runestone Academy guide to familiarize yourself with it.  Once you are familiar with Runestone Academy, use the following steps to adopt the GitKit text for a course:    Create a Runestone course using the GitKit (Linux Desktop Edition) or the GitKit (VSCode Edition) of the text.    You can either create assignments for your students from the GitKit sections and exercises, or you can Copy the Course Pack for the GitKit from the gitkitlinux base course into your course.  The course pack includes a reading assignment and a problem assignment for each of the chapter of the GitKit text (except ). The provided reading assignment for each chapter includes all sections of the chapter and is auto-grading based on student interaction with each of he chapter's sections. The provided problem assignment for each chapter includes every interactive exercise in the chapter. Every exercise that can be auto-graded is graded using % Correct and the students last answer . If you adopt the course pack you can modify the sections and questions that are included in the assignments, how they are graded and also add your own questions. See the Working with Assignments section of the Using eBooks with Runestone Academy guide for more details.  The reading assignments in the course pack include sections that allow students to elect to participate in a research project aimed at (1) understanding what they think and know about open source tools and techniques and (2) assessing the effectiveness of the GitKit. In addition, there are surveys at the end of each chapter by which students can provide feedback to help improve the GitKit for future students.    and are a pre\/post survey pair. These surveys aim to help the authors better understand the impact and effectiveness of the GitKit.  The also allows students to consent to providing the GitKit authors with their responses to all of the GitKit exercises. If you would like to provide the GitKit authors with exercise responses from students in your course who consented please contact Dr. Braught (braught@dickinson.edu) Professor of Computer Science at Dickinson College for additional information.     , , , and ask for feedback on each of the individual chapters and will be used to help improve future versions of the GitKit.     Completion of any of these surveys is completely optional. The authors hope that you will leave these sections in the assignments to give your students the option to complete them. However, if you prefer not to include them they can be removed from the reading assignments in Assignments tab on the Instructor's Page for your course.  These surveys have been approved by the Institutional Review Board (IRB) at Western New England University. If you have any questions about this study, you may contact either: Faculty contact: Dr. Ellis (ellis@wne.edu) Professor, Computer Science and Information Technology department, Western New England University, or IRB contact: Dr. Jess Carlson, Professor of Psychology, jessica.outhouse@wne.edu.     Manage the students in your course either by registering them or by having them self-register.       Doing the GitKit Yourself  By far the best, and highly recommended, way to prepare to deliver the GitKit is to do it yourself by playing the role of both the instructor and the student simultaneously. Use the following steps to do the GitKit yourself:   Follow the steps in to deploy a GitKit FarmData2 upstream for you to use for practice.    For each Chapter in the text, find the section of for that chapter:   Download and review the slides for the chapter and their speaker notes.    Review the Slide Notes for the chapter.    Review the To-Do List for the chapter for a list of tasks to be done before the class.    Complete the exercises in the chapter while simultaneously following along with the Exercise Notes for the chapter.       When you are done, you can delete the practice GitKit FarmData2 repository that you created.       Deploying the GitKit  To use the GitKit the instructor for the course must deploy one or more instances of it. Deploying an instance of the GitKit creates a repository that students use as the upstream repository for the hands-on activities.  The repository that is created contains the code, documentation and history from the FarmData2 project (see ) and has an issue tracker that is populated with the tickets that are used in the GitKit activities. This repository is also configured to interact with the KitClient to install the Kit-tty virtual assistant (see ) and to provide simulated community automations (see ).  Use the following steps to deploy an instance of the GitKit FarmData2 repository for use in your course:   Identify the GitHub space where you would like to deploy the GitKit FarmData2 repository. The GitHub space can be your GitHub account or a GitHub organization that you have created for your course and for which you have write permission.    Visit GitHub using this link to create a New personal access token (classic) with:   All \"repo\" permissions.    \"workflow\" permission.    \"read:org\" permission under \"admin:org\".       Be sure to copy your access token.    Click this link to Deploy the GitKit FarmData2 repository .    Respond to the deployer prompts that appear in the window. It will ask you for:   The name of the repository. We recommend \"GitKit-FarmData2\".    You GitHub username to deploy into your GitHub space, or the name of a GitHub organization to which you have write permission to deploy into that organization's GitHub space.    The personal access token that you created.       Wait for the deployer to complete. This typically takes several minutes because the deployer must create the issues in the issue tracker slowly to avoid being rate-limited by the GitHub API.    When the deployer completes it will generate output similar to the following that shows the URL of your deployed GitKit FarmData2 repository.   Your new repository is ready. Give the URL below to your students. https:\/\/github.com\/someLocation\/GitKit-FarmData2   Copy the URL of the repository and distribute it to your students using e-mail, LMS or whatever means is convenient for you.    Note that each deployed GitKit can support up to 32 students. If you have more than 32 students, you will need to repeat steps 4-7 to create additional deploys.  Each deployed repository must have a unique name. We recommend appending suffixes to \"GitKit-FarmData2\" for example \"GitKit-FarmData2-group1\", \"GitKit-FarmData2-group2\", etc.    Please consider clicking the link to the brief survey that is included in the output of the GitKit deployer. Your feedback helps us to better understand where and how the GitKit is being used. This survey can also be accessed here .       Instructor Materials  The following links provide easy access to the chapters with the hands-on exercises, the presentation slides for each chapter and a set of instructor notes for each chapter. The Instructor Notes for each chapter include Slide Notes , a To-Do List , and Exercise Notes . The Slide Notes give an overview of the slides and then slide-by-slide information for the instructor. The To-Do List enumerates any tasks that the instructor should be sure to do before the class meeting. The Exercise Notes provide some helpful comments on specific hands-on exercises.       [ Slides | Slide Notes | To-Do | Exercise Notes ]           [ Slides | Slide Notes | To-Do | Exercise Notes ]           [ Slides | Slide Notes | To-Do | Exercise Notes ]           [ Slides | Slide Notes | To-Do | Exercise Notes ]          Contributing to GitKit  All of the work on the GitKit is being conducted under open licenses (GPL3, CC-BY-NC-SA) and we welcome participation, contribution and derivative work.  For any kind of question, difficulty, suggestion, or suspected bug, chatting with us on Discord is a great place to start.  Errors, typos or suggestions for the textbook can be submitted using the GitKit-Text Issue Tracker .  Active work on the deployer and the KitClients takes place in the Kits section of the HFOSSedu GitLab Organization .   "
},
{
  "id": "topic-quick-start-2",
  "level": "2",
  "url": "topic-instructor-intro.html#topic-quick-start-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gitkitlinux "
},
{
  "id": "topic-gitkit-development-environments-2-1",
  "level": "2",
  "url": "topic-instructor-intro.html#topic-gitkit-development-environments-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "KitClient "
},
{
  "id": "topic-gitkit-development-environments-2-2",
  "level": "2",
  "url": "topic-instructor-intro.html#topic-gitkit-development-environments-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linux Desktop KitClient VSCode KitClient "
},
{
  "id": "topic-adopt-gitkit-text-3",
  "level": "2",
  "url": "topic-instructor-intro.html#topic-adopt-gitkit-text-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gitkitlinux reading assignment problem assignment % Correct last answer Assignments Instructor's Page "
},
{
  "id": "topic-instructor-communities",
  "level": "1",
  "url": "topic-instructor-communities.html",
  "type": "Section",
  "number": "1.2",
  "title": "Communities and Collaboration Instructor Notes",
  "body": " Communities and Collaboration Instructor Notes   This chapter introduces students to Free and Open Source Software (FOSS), FOSS community principles and roles. The materials assume that this is the student's first introduction to FOSS and aim to develop a conceptual picture and an introductory working knowledge rather than mastery.  The exercises in this chapter have the students perform the following major tasks:   Review FOSS Community principles and roles.    Explore the issue tracker and claim a Round1 issue to work on.    Fork the upstream `GitKit-FarmData2` repository into their own GitHub space.    Setup their development environment.    Clone their fork (i.e. their origin) of the `GitKit-FarmData2` repository.       Slide Notes     Slide 2  The Grandma Mae Cookie Video provides a good working metaphor for how FOSS collaboration works. Students are asked to identify key FOSS vocabulary terms from this video. Of that vocabulary, the following terms are most essential and are useful to refer back to through the remainder of the GitKit materials. The discussion following the video should ensure that they are clearly defined:     Roles - captures the idea that different project community members have different responsibilities. Two of the key roles mentioned are:    Maintainer - (e.g. Grandma Mae) - a trusted community member that has write access to the definitive version of the project (i.e. the main     Contributor - (e.g. Aunt Maria, Uncle Miles) - a community member who is helping the project in some way (i.e. is upstreaming), but does not have write access to the upstream. They contribute to the project through discussion, documentation, proposing changes, providing code that fixes bugs or implements features, and many other ways.        Upstreaming - the process of contributors proposing changes and the maintainers integrating those changes into the definitive version of the project.     Main branch - the definitive version of the project (e.g. Grandma Mae's recipe). Note that there may be multiple copies of this recipe (i.e. multiple copies of the main branch).    Upstream - This term is not given in the video but is worth grounding in the Cookie metaphor because it is important in the remainder of the GitKit materials.  In this context, the upstream is what contains the copy of the main branch that can only be changed by the maintainers (i.e. Grandma Mae's copy of the main branch). The term upstream captures the idea that changes that are upstreamed are integrated into the \"upstream\" copy of the main branch.  Note that contributors may propose changes to the upstream main branch, but they will not have sufficient privileges to integrate those changes. Only maintainers have the permissions necessary to make changes to the upstream main branch.  This fact becomes important in the GitKit Topic 2, where the rule that \"only maintainers should change the main branch\" is introduced. This discussion should foreshadow that rule.        Branch or Patch - A collection of changes to the project that are developed aside from the definitive version (e.g. Aunt Maria or Uncle Mile's version of the recipe). A branch or a patch is sent to the maintainers as part of the upstreaming process.     Fork - In the video a fork is a permanent split in the project community, with each group taking the project in different directions (e.g. as happened with MySQL and MariaDB).  It is important to note that this is a different meaning than a fork in GitHub\/GitLab. In GitHub\/GitLab a fork most often refers to a personal copy of the upstream repository. This copy is made as part of the upstreaming process, rather than to split the community and take the project in a different direction. Though, a fork (split) would often begin with a fork (copy).      Slides 3-5  The discussions around FOSS communities, principles and roles asks students to build out from the Cookie metaphor. They are asked to use their understanding of the general terms (e.g. Transparency, Inclusivity, etc; Leaders, Requestors, etc) to imagine what these terms mean in the context of a FOSS community. Not every term will require clarification following small group discussion. Most commonly the principles of Meritocracy and Release Early and Often, and the distinction between the roles of User, Requestor and Contributor are topics for further clarification. This is also a good point at which to emphasize that a given individual may play different roles at the same time. For example, Grandma Mae could put forth an idea for an improvement to her recipe as a contributor. Then if the community likes the idea, she may, as a maintainer, integrate it into the upstream main branch.    Slides 6-8   Version control and repository hosting are defined as collaboration tools and a distinction is drawn between them. A number of different examples of each, e.g. svn\/mercurial for version control and GitLab\/SourceForge for repository hosting, are mentioned for breadth. This can also help to emphasize that while the GitKit focuses on git and GitHub, that the concepts being covered apply to a broad range of similar tools. While the distinction between version control and repository hosting is a useful one, it is far less clear in practice and this can cause confusion for some students - particularly those with prior git\/GitHub experience. For example, most repository hosting services provide access to some aspects of the underlying version control tools for the repositories that they host (e.g. it is possible to create branches and commit changes via the GitHub user interface).    Slides 10-15  The GitKit uses sequences of diagrams to visualize key concepts and processes related to the use of git and GitHub and the forking workflow. Diagrams in the same style are used throughout all of the GitKit topics. A key to success with the GitKit, for both faculty and students, is understanding these diagrams and being able to connect what they depict to the git \/ GitHub commands used in the forking workflow.  The first series of diagrams show the relationship between the three copies of a FOSS project's repository that a developer interacts with (upstream, origin and local). They also illustrate the connection between these three copies and the git and GitHub commands that create them (fork and clone). A distinction is also made between remote copies of the repository, those residing in the cloud (the upstream and origin), and the local copy that resides in the student's development environment. Note, that when using a KitClient the development environment is running via GitPod and not on the student's physical machine. This can be a source of confusion and it is worth spending some time clarifying this relationship.  The hands-on activities provide detailed instructions for creating a fork in GitHub, starting the KitClient and creating a local clone. However, if time allows it may be also be helpful to demonstrate these actions in class.    Slides 17-20  A second series of diagrams introduce a basic FOSS workflow that illustrates how upstreaming works. Note that this is not the full forking workflow, as it does not include the use of feature branches and ignores the details of staging and committing changes. The primary purpose of this sequence of diagrams is to illustrate how the concept of upstreaming from the Cookie video is implemented using git\/GitHub. Additional details of the forking workflow (branch, edit, stage, commit) are added in the second topic and revisited in the third topic.    Slide 21  The slides conclude with a short introduction to the idea of an issue tracker and its role in a project. The use of the issue tracker tends to be fairly intuitive and the hands-on activities walk students through some of the details. The hands-on activity has each student claim an issue that is labeled as \"Round 1.\" Note that they claim the issue in this activity, but do not fix it until the next activity. Each of these issues asks them to fix a typo that appears in one of the Markdown ( .md ) files in the root directory of the project.  If time permits, a live demo looking at the issue tracker in the upstream GitKit-FarmData2 repository, pointing out the \"Round 1\" label and how to tell if an issue has been assigned. Note that several of the issues will have been pre-assigned to whomever deployed the kit.       To-Do List     Follow the steps in or to prepare to use the GitKit in your course.       Exercise Notes          Some students will try to clone the upstream GitKit-FarmData2 repository instead of their origin repository. A few may even attempt to clone the real FarmData2 repository. The Kit-tty should prevent this and provide a helpful tip.         Checking the origin remote that is given as the answer to this question will confirm that the student has correctly cloned their origin. Again, the Kit-tty should prevent them doing this incorrectly, but if somehow it did not catching and correcting this early is important.         The answer to this question will reasonably differ depending upon when students complete the exercise. There are initially 3 issues that are pre-assigned to the user that deployed the GitKit. Students who complete the exercise early are likely to all identify these issues. As additional students claim issues, other students will identify those claimed issues as well.         The activity instructs students to claim an issue by commenting on it with the very specific phrase \"I would like to work on this please!\" If they are the first to do so the issue will be assigned to them and they will receive a personalized message from a one of the community automations in response. If they are not the first to respond, they will also receive a message to that effect and a suggestion to try a different issue. It is important that they use the exact message given in the assignment, otherwise the community automation will not recognize and respond to the question.         Some students will attempt to clone the project that they select while they are inside the GitKit-FarmData2 repository that they already cloned. If they do attempt this the Kit-tty should intervene, prevent the action and respond with a helpful message.      "
},
{
  "id": "topic-communities-slide-notes-2",
  "level": "2",
  "url": "topic-instructor-communities.html#topic-communities-slide-notes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Roles Maintainer Contributor Upstreaming Main branch Upstream upstreamed Branch Patch Fork Version control repository hosting "
},
{
  "id": "topic-instructor-upstreaming",
  "level": "1",
  "url": "topic-instructor-upstreaming.html",
  "type": "Section",
  "number": "1.3",
  "title": "Working Locally and Upstreaming Changes Instructor Notes",
  "body": " Working Locally and Upstreaming Changes Instructor Notes   This chapter focuses on the upstreaming process. Students learn about feature branches, staging and committing changes, pushing feature branches to their origin repository, and making a pull request. At the end of the hands-on activity each student will have experienced the full forking workflow, resulting in a pull request to the upstream GitKit-FarmData2 repository for changes that fix the \"Round 1\" issue that they were assigned. The \"Round 1\" issues have been created such that they do not conflict with each other. Thus, all of the student pull requests should be able to be merged automatically. The instructor will typically perform these merges as a demonstration at the start of .  The exercises in this chapter have the students perform the following major tasks:   Create a feature branch.    Switch to the feature branch.    Edit the local files to fix the issue that they were assigned.    Stage the changes that they made to the local files.    Commit the staged changes to their feature branch    Push their feature branch to their origin on GitHub.    Make a pull request to the upstream.       Slide Notes     Slide 2  Reviews the main git \/ GitHub concepts and vocabulary from Topic 1. The terms upstream repository , origin repository , local repository , local , remote , fork , and clone should be reviewed so that they begin to be part of the student's working vocabulary.    Slide 3  Reviews the simplified workflow introduced in the previous topic. It should be re-emphasized that this is a simplified view and that this topic is about \"un-simplifying\" this view by filling in the details. The figure on this slide, shows a situation where a contributor has made changes to their local repository that they want to upstream.    Slide 4  Introduces branches and commits. In the diagrams on these slides, and throughout the remainder of the GitKit, different colors are used as the unique identifier for each commit (e.g. we can talk about the \"red\" or the \"yellow\" commit). This slide introduces a conceptual simplification to think of a commit as a complete \"snapshot\" of all files in the project repository at that point in time, along with some meta data. Depending on the level of the course being taught, it may be worth a moment here to to explore the idea that storing a complete copy of the files for each commit would be very inefficient and discuss that it does not work that way in practice. Git commits do not actually contain full copies of every file in the repo. Instead, for each file that is changed by the commit, the \"snapshot\" contains a full (compressed) copy of the file. For each file that is not changed by the commit, the \"snapshot\" contains only a link (like a shortcut) to that file. This link points to the file in the most recent commit in which it was changed. Depending on the level of the course being taught, this can also provide an opportunity to distinguish git from other delta-based version control systems (cvs, svn) where commits record changes to files rather than complete copies of the changed files.    Slide 5  The rule that they should \"only commit to feature branches\" is introduced here. Rather than attempting to provide a full explanation of the technical reasons for not committing to the main branch, this rule is based on the following rationale. Any time new work is started it should begin from the definitive version of the project. This definitive version is contained in the upstream main branch. Now recall, from the first topic, that only the project maintainers have the permissions necessary to change the upstream main branch. Thus, keeping your copies of the main branch identical to the upstream (i.e. by not committing to it) allows you to start your work from the definitive version. This explanation often elicits the question of what happens when the maintainers change the upstream main branch? That question can be put off, as how to keep in synch with the upstream is the focus of the next topic.    Slides 6-7  The diagrams used by the GitKit to illustrate git and GitHub concepts are extended to include branches and commits. The convention of using colors as the unique identifier for each commit is also used in these diagrams. In doing so, it is important to emphasize the distinction between the final commit in the active branch and the local files . Before any changes are made, the local files can be thought of as a copy of the final commit in the active branch. This is illustrated by initially having the \"dot\" in the local files be green, the same color as the final commit in the main branch.    Slides 8-9  The diagrams here illustrate creating and switching to a feature branch. With multiple branches, the concept of the active branch as the target for future commits becomes important and is introduced here. Later slides will show the addition of new commits to the active feature branch.    Slide 10  This diagram illustrates the editing of the local files. The difference between this diagram and the previous one can be easy to miss. The color of the \"dot\" in the local files changes from green to blue indicating that the local files have been edited. The fact that the final commit has remained green can be used here to further emphasize the fact that the final commit and the local files are distinct.    Slides 11-12  The diagrams here illustrate the process of staging changes and then committing them to the active branch. The notion that a commit should contain a \"nameable unit of work\" is introduced here. Additional attention to the idea of \"nameable\" is provided by several exercises in the chapter that have students assess the quality of commit messages. If time is available when presenting this topic, spending some class time on similar exercises in class would help to clarify that idea.    Slide 13-14  The diagrams here complete a full cycle of the forking workflow by illustrating the feature branch being pushed to GitHub and a pull request being made to the upstream repository. A point of emphasis here should be that pushing the branch to GitHub is necessary to make the changes that it contains available to the maintainers of the upstream. This can be used as another point at which to draw distinction between version control (git) and repository hosting (GitHub). Specifically, pull requests are a repository hosting feature created to facilitate collaboration by allowing many contributors to work on changes and submit them to the upstream for consideration.       To-Do List     Prior to this class period it is a good idea to ensure that each student has claimed and been assigned a ticket in the issue tracker. Some student may have tried to claim an issue but not been assigned it due to a race condition with other students, or they may not have used exactly the right phrase in their comment. In the latter case, the instructor might reply to the errant comment in the issue tracker and suggest that the student try again.       Exercise Notes          If a student is seeing commit dates, usernames and messages that differ from the correct answers then it is likely that they created their fork after PRs were merged at the start of . Other than difficulty answering these questions this will not cause an issue with continuing with this chapter. Issues will arise with the exercises in and . Each of those chapters provide the students with instructions for resolving the issues at the point where they arise.         The git status command here should show one untracked file with modifications and that file should agree with the file that they identified in .         This question is a good checkpoint to ensure that they have done things correctly to this point. The most recent commit in the git log output should show that they committed changes to the correct file (i.e. the one from ) and that they have used a meaningful commit message.         The instructor can use the link provided here to check the students' pull requests for several points:   All of the \"Round 1\" issues have been created such that the do not conflict. Thus, every pull request for a \"Round 1\" issue should be able to be merged automatically. If a given pull request cannot be merged automatically, a comment can be added to the student's pull request with suggestions on how to correct the issue.    Each pull request should contain a line with \"Closes #xx\" or \"Fixes #xx\" as per . If the student PR does not contain this line, or the line is incorrect (e.g. \"Closes#xx\"), then a comment can be added to the student's pull request requesting that they add or correct this line.         "
},
{
  "id": "topic-upstreaming-slide-notes-2",
  "level": "2",
  "url": "topic-instructor-upstreaming.html#topic-upstreaming-slide-notes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upstream repository origin repository local repository local remote fork clone active branch local files active branch commit "
},
{
  "id": "topic-instructor-synchronizing",
  "level": "1",
  "url": "topic-instructor-synchronizing.html",
  "type": "Section",
  "number": "1.4",
  "title": "Staying Synchronized Instructor Notes",
  "body": " Staying Synchronized Instructor Notes   At the start of this chapter, the students will have made pull requests for fixes to the \"Round 1\" issues that they have claimed. When these pull requests are merged into the upstream main branch it will contain changes that are not in the student's local and origin main branches. That is, the student's main branches will be out of synch with the upstream main . This chapter deals with how developers synchronize the main branches of their local and origin repositories with the upstream main branch.  The exercises in this chapter have the students perform the following major tasks:   Set an upstream remote.    Pull changes from the upstream main into their local main .    Push their local main to their origin.    Find a \"Round 2\" ticket in the issue tracker.    Make changes for their \"Round 2\" issue and upstream them using the forking workflow from .       Slide Notes     Slides 2-3  A review of the elements of the forking workflow introduced and practiced in and . Steps 3-9 on slide 3 are repeated for each contribution (e.g. bug fix, new feature). The feature branch should be pushed to the origin and the pull request made sooner rather than later, because it makes the changes available to the project maintainers for review and discussion as they are developed. Some projects will even suggest creating a PR prior to making any changes. Once the PR is created, steps 5-8 can then be repeated for each \"nameable unit of work\" (i.e. each commit) that is involved in completing the contribution.    Slide 4  This diagram shows the state at the start of this chapter. The students have made pull requests for their \"Round 1\" issues, but those PRs will not have been merged yet. At this point, the instructor can model the actions of a project maintainer and merge a few of these PR's (see: ).  In addition to merging a few PRs it is worth also discussing other actions that a maintainer might take at this point, including:   Reading the body of the PR to understand what is being proposed. In practice, if the change is more complex than our \"Round 1\" issues there would be a longer more detailed description expected. A review of the purpose of the \"Closes\" or \"Fixes\" line is also appropriate at this point.    Looking at the \"diff\" in the \"Changes\" tab to get a quick overview of how the contributor has implemented the proposed changes. A maintainer might insert comments directly in the code to request changes or ask questions.    \"Pulling\" a copy of the branch so that they can:   Run the program and observe the behavior of the proposed change.    Ensure that the proposed change passes all of the automated tests that the project contains.       In practice there may be several rounds of feedback from the maintainers and additional changes by the contributor before a PR is ready to be merged into the upstream.       Slide 5  This diagram shows the state just after a maintainer has merged some of the \"Round 1\" pull requests. The key observation here is that the upstream main branch will contain some commits (e.g. blue, and\/or pink, and\/or lime) that the main branches in the students' local and origin repositories do not. That is, the students' copies of the main branch will now be out of synch with the upstream main branch.    Slide 6  This diagram shows a developer pulling the changes to the main branch from the upstream repository into their local repository and then pushing them to their origin. This brings their copies of the main branch into synch with the upstream main branch. While it is not strictly necessary to push the main branch to the origin it keeps everything in sync .  The diagram shows a fast forward merge meaning that the commits in the upstream main branch can simply be added to the end of the local main branch without having a merge commit . This is possible because the commits added to the upstream all build from the \"green\" commit AND there have been no changes to the local main .    Slide 7  This diagram helps to justify the \"Only commit to feature branches\" rule. It shows the state that could arise if a developer were to make a commit to their local main branch. Here there could possibly be a conflict between the developer's \"fuchsia\" commit and the \"lime\" commit that was added to the upstream main by a maintainer. This potential conflict prevents a fast-forward merge. Thus, by not committing to the local main branch and by using only fast-forward merges, developers can ensure that their copies of the main branch stay in synch with the upstream main . Doing so ensures that every time they create a new feature branch from main they will be starting from the most up to date state of the project.    Slide 8  This diagram shows the state after the developer deletes the feature branch from their local and origin repositories. The changes that were contained in the feature branch have been merged into the main branches. Thus, there is no need to retain the feature branch and deleting it reduces clutter. For students, deleting their feature branches can feel like deleting their work and thus they may not want to do so. There is no real harm in them retaining their feature branches.  It should be emphasized that they should not delete their feature branches before they have been merged into the upstream. If a PR is made for a feature branch and that branch is deleted from the developer's origin, then the maintainers will no longer have access to the changes.    Note  This set of materials may be a little short for a 75-minute class period. The remaining class time can be used to help students who had difficulties creating a PR, who's PR's cannot be merged automatically or are missing the \"Closes\" or \"Fixes\" lines.       To-Do List    If time permits, review the students \"Round 1 pull requests as they are submitted and comment on any PRs that are missing a description or a \"Closes\"\/\"Fixes\" line. Occasionally, a student will also make a PR for an issue that has not been assigned to them, commenting that they should request that the issue be assigned to them as described in .    Prior to this class review the \"Round 1\" pull requests. Identify some that are suitable as examples of maintainers merging PRs into the upstream.    Demonstrate the activity of a project maintainer by merging a few of the student \"Round 1\" pull requests. Merging all of the PRs in a class with more than a few students becomes tedious and it is sufficient to do just a few live. The remaining PRs can then be merged after introducing .    Follow up after introducing with any students who have not yet made a \"Round 1\" PR.      Exercise Notes          If a student begins the GitKit activities late they may make their fork and clone after the \"Round 1\" issues have been merged. This will result in their origin main branch not being behind the upstream main branch. The directions in of the activity have them reset the HEAD of their main branch to the commit before any \"Round 1\" issues were merged. Once they force push this change to their origin they will then see that their main branch is behind the upstream main as expected.         It is a good idea to check here that the student's upstream remote points to the correct GitKit-FarmData2 repository. The Kit-tty should have caught this error and directed students on the correct way to set the upstream remote. However, some students have still managed to set their upstream to point to their origin or to the live FarmData2 repository.         After synchronizing with the upstream, the students go on to find a \"Round2\" ticket in the issue tracker. There are only 4 \"Round2\" issues, so multiple students will be working on each one. This question requests that they comment on the issue they want to work on but should spread themselves across the available \"Round 2\" issues. If you like you can manually assign each \"Round2\" issue to all students who commented on it, though this is not necessary.      - .   These questions ask the student to use the forking workflow to create a fix for the \"Round 2\" ticket on which they chose to work. GitHub will indicate that the PRs created by each student for their \"Round 2\" issue can be merged automatically. This is because even though multiple students are working on each \"Round 2\" issue, none of them will have been merged into the upstream main at this point. When introducing the instructor will merge a branch that creates conflicts with all of the student \"Round2\" PRs.      "
},
{
  "id": "topic-instructor-synchronizing-2-1",
  "level": "2",
  "url": "topic-instructor-synchronizing.html#topic-instructor-synchronizing-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "out of synch "
},
{
  "id": "topic-synchronizing-slide-notes-2",
  "level": "2",
  "url": "topic-instructor-synchronizing.html#topic-synchronizing-slide-notes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fast forward merge merge commit "
},
{
  "id": "topic-synchronizing-exercise-notes-2",
  "level": "2",
  "url": "topic-instructor-synchronizing.html#topic-synchronizing-exercise-notes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "behind "
},
{
  "id": "topic-instructor-merge-conflicts",
  "level": "1",
  "url": "topic-instructor-merge-conflicts.html",
  "type": "Section",
  "number": "1.5",
  "title": "Merge Conflicts Instructor Notes",
  "body": " Merge Conflicts Instructor Notes   At the start of this chapter students will have made pull requests for the \"Round 2\" issues. Initially GitHub will report that these PRs can be merged automatically. However, the instructor will begin this topic by introducing changes to the upstream main that create merge conflicts with the fixes to each of the \"Round 2\" issues. Students will then observe that their PRs go from being able to be merged automatically to containing conflicts.  This chapter then focuses on the resolution of merge conflicts. The concepts of merge commits, common ancestors, best common ancestor, and non-conflicting and conflicting changes are introduced. The topic then covers the process of merging main into a feature branch, git's raw conflict information and the use of graphical merge tool. The hands-on activity concludes with the students having resolved the merge conflict in their \"Round 2\" pull request. Note that these PRs are never merged into the upstream as part of the GitKit activities.  The exercises in this chapter have the students perform the following major tasks:   Synchronize their main branches with the upstream main branch, which will bring in the changes that conflict with their \"Round 2\" fixes.    Merge the main branch into their feature branch, which will create the merge conflict.    Examine the raw merge conflict information.    Use the VS Code merge tool to resolve the conflict.    Commit the merged result to their feature branch.    Push the feature branch to update their pull request.       Slide Notes     Slide 2  Another opportunity is taken to review of the steps involved in the forking workflow. Students typically have a good handle on these steps and how they are ordered when using the forking workflow to upstream changes.    Slides 3-4  The instructor may merge a provided branch that creates conflicts with the \"Round 2\" issues (See: ) either before or during class. Merging the conflicts during class is the preferred option if time permits. This allows the instructor to show a few student \"Round 2\" PRs and that indicate that they can currently be merged automatically. Then merge the PR with the conflicts and look at the PR's again to show that they now contain conflicts. Slide 4 can be used to illustrate how the conflicts have arisen.    Slide 5  Introduces the merge operation and merge commits . At this point, a merge with no conflicts (i.e. like the \"Round 1\" PRs) is illustrated. This is shown from the project maintainer perspective with the feature branch from a PR being merged into the upstream main branch. Later this will be reversed when students are merging their copy of the upstream main branch into their feature branch to resolve conflicts (see Slides 19-23).  Merge commits are shown in the diagram as a colored dot with a ring around them. A merge commit for non-conflicting changes are shown with a white ring around them. The ring is added to indicate that the meta information about the commit is different than what was contained in the feature branch. This also records, in the project history, the fact that the changes were merged into main .    Slides 9-12  Uses a text based example to introduce the concepts of common ancestors and best common ancestor , and then uses those to identify conflicting changes and non-conflicting changes . One way to identify these changes is first to compare the feature branch to the best common ancestor and highlight all changes in the feature branch. Then repeat, but compare the main branch to the best common ancestor and highlight all differences in the main branch. Then any lines that are highlighted in both the feature branch and the main branch are conflicting changes. All other highlighted lines are non-conflicting changes.  Note that in these examples the identification of conflicting changes is simplified to be line based . That is, if a change is found, the entire line is marked as containing a change. Similarly, if a line is changed in both the feature branch and the main branch, the entire line is marked as a conflict. The algorithm used by git is more complex than this simplified approach, but the concept is sufficiently the same for the purposes of these activities.    Slides 13-16  These slides contain some additional practice exercises for identifying non-conflicting and conflicting changes, and merging the results. These activities can be done and discussed in small groups during class if time permits.    Slide 17  Establishes the basis for how developers (i.e. the students) will resolve merge conflicts. While a maintainer could resolve the conflict, more typically the developer who submitted the PR will be expected to resolve any conflicts in their PR.    Slide 18  The way that a developer will resolve a merge conflicts is to pull the (conflicting) changes to the upstream main to their local repository. They then merge the main branch into their feature branch. They then push their updated feature branch to their origin, which automatically updates the PR for that branch. Because the PR has been updated the maintainers are now able to review not only the proposed changes but also the way that the merge conflicts were resolved.  Note that this is backwards from what was done earlier. In the maintainer was merging the feature branch into the main branch. Here the developer is merging the main branch into their feature branch. The rule that developers \"only commit to feature branches\" can be used as a grounding for why developers do the merge in this direction.    Slide 19  Illustrates in more detail the merge of both non-conflicting and conflicting changes from the main branch into the feature branch. Here the merge commit contains a colored ring instead of a white ring (as it did earlier). The colored ring indicates that the merge commit blends the changes that were contained in its two parent commits.    Slide 20  Shows the raw merge conflict information that is produced by git when a merge creates a conflict. This information can be edited manually in any text editor. However, it is often difficult to identify exactly what changes exist. This is good motivation for the use of a graphical merge tool that makes it easier to see what changes have been made and where the conflicts exist.    Slides 21-23  Shows the graphical merge tool that is built into VS Code. The exercises guide the students through use this tool to resolve the conflicts in their PRs for their \"Round 2\" issues.    Slide 24-25  Here for review and reference and not much time needs to be spent on these slides. The final slide collects into one diagram everything that is a part of the forking workflow. It has a lot going on, but by this point students should be able to make sense of each of the actions that are illustrated.       To-Do List     If time permits, monitor the \"Round 2\" tickets in the issue tracker. There are only 4 \"Round 2\" issues and thus there will need to be multiple students working on each. If a student uses the the comment from , and they are the first to do so, the issue will be assigned to them automatically. The instructor can manually assign the issue to all other students that comment on it.    Create, but do not merge, a pull request for the addRound2Conflicts branch in the upstream. When merged this branch will create a conflict with each of the changes requested in a \"Round2\" issue. Thus, this PR should not be merged until after the students have synchronized with the upstream main at the start of this chapter. If it is merged before they synchronize, then they will begin the fix for their \"Round 2\" issue with the (conflicting) changes already in place, and thus their fix will not generate the expected merge conflict. If students find themselves in this situation, there are instructions in the chapter guide them through a process that will create a conflict for them.    Just before class, or during class merge the PR for the addRound2Conflicts branch. It has been effective to do the merge of the PR for the addRound2Conflicts branch live in class.       Exercise Notes       -    In this exercise there are no conflicting changes and the merge would be able to be completed automatically. However, if all of the non-conflicting changes are merged into the result the program will not produce the correct result. The point being that automatic merges can check for structural conflicts, but not logical or semantic conflicts and thus caution should be used when performing merges.         Inevitably some students will be behind on their work and will complete their sync with upstream main after you have merged the PR for the addRound2Conflicts branch. In these cases, their pull requests will not create a conflict to be resolved. These students should follow the instructions given in . These directions have them pull the mergeConflictPractice branch and create a pull request for it. That PR will then contain conflicts with the changes in the addRound2Conflicts branch that was merged into main . They will then complete the activity using the mergeConflictPractice branch as it it were their feature branch. Students not in this situation, but who would like additional practice can also pull and use the mergeConflictPractice branch at the end of the activity.      .   By default, VS Code does not display the best common ancestor in its merge tool. The steps given in these questions has the students change the VS Code configuration such that it includes the best common ancestor.      .   If the student did not need to use the merge-conflict-practice branch in , then they can use it at this point for additional practice with resolving merge conflicts.      "
},
{
  "id": "topic-merge-conflicts-slide-notes-2",
  "level": "2",
  "url": "topic-instructor-merge-conflicts.html#topic-merge-conflicts-slide-notes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "merge merge commits common ancestors best common ancestor conflicting changes non-conflicting changes graphical merge tool "
},
{
  "id": "topic-gitkit-pre-survey",
  "level": "1",
  "url": "topic-gitkit-pre-survey.html",
  "type": "Section",
  "number": "2.1",
  "title": "GitKit Pre-Survey",
  "body": " GitKit Pre-Survey   The GitKit was created as part of a larger research project that aims to understand what computing students think and know about open source tools and techniques. You may elect to particpate in that research project and help to improve the GitKit for future students by completing the consent form and pre-survey linked below. Completing the consent and pre-survey will take about 2-3 minutes.  Click to complete the GitKit consent form and pre-survey.   This research has been approved by the Institutional Review Board (IRB) at Western New England University. If you have any questions about this study, you may contact either: Faculty contact: Dr. Ellis (ellis@wne.edu) Professor, Computer Science and Information Technology department, Western New England University, or IRB contact: Dr. Jess Carlson, Professor of Psychology, jessica.outhouse@wne.edu.  Thank you for your time and consideration, it is greatly appreciated!   "
},
{
  "id": "topic-foss-communities",
  "level": "1",
  "url": "topic-foss-communities.html",
  "type": "Section",
  "number": "2.2",
  "title": "FOSS Communities",
  "body": " FOSS Communities   During class time you will have learned about the principles that guide FOSS Communities and the roles that are performed by FOSS community members. The exercises in this section ask about those principles and roles.    FOSS Community Principles   Some of the key principles that guide FOSS communities are shared values , collaboration , transparency , inclusivity , meritocracy and release early and often . If you would like you can review a discussion of some of these principles at The Open Source Way       Consider each of the following statements about the operation of a FOSS community and choose the principle (or principles if multiple apply equally) with which it most closely aligns.   By building on each other's work the community can solve problems that no one could solve alone.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Decisions and the rationale for them are available to the community.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      The mission and goals of the community are more important than individual agendas.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      The best ideas should win, regardless of where they come from.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Incorporating new changes and features quickly generates feedback and leads to rapid improvement.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Community members enhance and extend what others contribute in unanticipated ways.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Decision makers continually seek diverse perspectives.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      All community members have access to the information necessary to do their best work.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often         FOSS Community Roles   There are a number of roles that tend to exist in FOSS communities. Some of these included Users , Requestors , Contributors , Maintainers and Leaders . Not all communities will have all of these rolls and often community members will take on multiple roles simultaneously or move between roles over time.      Consider each of the actions described below. For each action, select the role (or roles) of the individual(s) that would most likely be responsible for the action.   Choosing the license under which the project will be released.      Users  Requestors  Contributors    Maintainers  Leaders      Using the software in a new, unanticipated or creative way.      Users  Requestors  Contributors    Maintainers  Leaders      Asking that a useful new feature be added to the software.      Users  Requestors  Contributors    Maintainers  Leaders      Discovering a bug in the software.      Users  Requestors  Contributors    Maintainers  Leaders      Providing a code patch that fixes a bug in the software.      Users  Requestors  Contributors    Maintainers  Leaders      Submitting an improved set of installation instructions.      Users  Requestors  Contributors    Maintainers  Leaders      Documenting a bug in the issue tracker so others can fix it.      Users  Requestors  Contributors    Maintainers  Leaders      Defining the goals for the next year of work on the project.      Users  Requestors  Contributors    Maintainers  Leaders      Incorporating a contributed bug fix into the main branch.      Users  Requestors  Contributors    Maintainers  Leaders      Redesigning a software module in the system.      Users  Requestors  Contributors    Maintainers  Leaders        "
},
{
  "id": "topic-foss-communities-3-2-1",
  "level": "2",
  "url": "topic-foss-communities.html#topic-foss-communities-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shared values collaboration transparency inclusivity meritocracy release early and often "
},
{
  "id": "ex-community-principles",
  "level": "2",
  "url": "topic-foss-communities.html#ex-community-principles",
  "type": "Exercise",
  "number": "2.2.1.1",
  "title": "",
  "body": " Consider each of the following statements about the operation of a FOSS community and choose the principle (or principles if multiple apply equally) with which it most closely aligns.   By building on each other's work the community can solve problems that no one could solve alone.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Decisions and the rationale for them are available to the community.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      The mission and goals of the community are more important than individual agendas.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      The best ideas should win, regardless of where they come from.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Incorporating new changes and features quickly generates feedback and leads to rapid improvement.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Community members enhance and extend what others contribute in unanticipated ways.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Decision makers continually seek diverse perspectives.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      All community members have access to the information necessary to do their best work.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often     "
},
{
  "id": "topic-foss-communities-4-2-1",
  "level": "2",
  "url": "topic-foss-communities.html#topic-foss-communities-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Users Requestors Contributors Maintainers Leaders "
},
{
  "id": "ex-community-roles",
  "level": "2",
  "url": "topic-foss-communities.html#ex-community-roles",
  "type": "Exercise",
  "number": "2.2.2.1",
  "title": "",
  "body": " Consider each of the actions described below. For each action, select the role (or roles) of the individual(s) that would most likely be responsible for the action.   Choosing the license under which the project will be released.      Users  Requestors  Contributors    Maintainers  Leaders      Using the software in a new, unanticipated or creative way.      Users  Requestors  Contributors    Maintainers  Leaders      Asking that a useful new feature be added to the software.      Users  Requestors  Contributors    Maintainers  Leaders      Discovering a bug in the software.      Users  Requestors  Contributors    Maintainers  Leaders      Providing a code patch that fixes a bug in the software.      Users  Requestors  Contributors    Maintainers  Leaders      Submitting an improved set of installation instructions.      Users  Requestors  Contributors    Maintainers  Leaders      Documenting a bug in the issue tracker so others can fix it.      Users  Requestors  Contributors    Maintainers  Leaders      Defining the goals for the next year of work on the project.      Users  Requestors  Contributors    Maintainers  Leaders      Incorporating a contributed bug fix into the main branch.      Users  Requestors  Contributors    Maintainers  Leaders      Redesigning a software module in the system.      Users  Requestors  Contributors    Maintainers  Leaders     "
},
{
  "id": "topic-github-set-up",
  "level": "1",
  "url": "topic-github-set-up.html",
  "type": "Section",
  "number": "2.3",
  "title": "GitHub Set Up",
  "body": " GitHub Set Up   You will be using GitHub in many of the exercises in this text. In order to use GitHub it is necessary that you have an account and a Personal Access Token. You will also configure your GitHub Codespaces to help conserve your free useage time.    GitHub Account    If you do not have a GitHub account, or would like to have a separate account just for this course, you can create a GitHub account here: https:\/\/github.com\/signup .  When you have a GitHub account to use for this class, move on to the next exercise.    Give the full URL to your GitHub profile, for example https:\/\/github.com\/yourUsername          Thank you.      Please give the full URL using the format indicated in the question.         GitHub Personal Access Token  When starting your development environment for the first time (in ) you will be asked to enter a Personal Access Token (PAT) from GitHub.  A PAT is like a password but has some security benefits. In particular, you can have multiple different PATs. Each one can have different limits on what can be done with it and each one can be revoked individually without affecting the others.    Follow GitHub's instructions for creating a (classic) personal access token: Creating a Personal Access Token (classic) .  When doing so be sure to:   Choose “repo” for the “scopes and permissions.”    Be sure to copy and paste your PAT somewhere safe – maybe e-mail it to yourself. You will not be able to retrieve it again after you leave the page.       What are the first 4 characters of your GitHub PAT?     gpat          ghp_    All GitHub PATs begin with ghp_      PAT_            Setting the GitHub Codespaces Timeout   The GitKit development environment runs in GitHub Codespaces. GitHub provides you with approximately 60 hours per month of free Codespaces use. By default the GitKit development environment will timeout after 30 minutes of inactivity. It is recommended that you reduce this timeout to 15 minutes to avoid accidentally consuming your allotted free useage.      Use the following steps to adjust the timeout for your Codespaces, including the GitKit developent environment.   Open your GitHub Codespaces settings by visiting .   Scroll down to the section labeled \"Default idle timeout\", adjust the timeout to 15 minutes, and click \"Save\".     "
},
{
  "id": "ex-create-github-account",
  "level": "2",
  "url": "topic-github-set-up.html#ex-create-github-account",
  "type": "Exercise",
  "number": "2.3.1.1",
  "title": "",
  "body": " If you do not have a GitHub account, or would like to have a separate account just for this course, you can create a GitHub account here: https:\/\/github.com\/signup .  When you have a GitHub account to use for this class, move on to the next exercise.  "
},
{
  "id": "ex-github-account-url",
  "level": "2",
  "url": "topic-github-set-up.html#ex-github-account-url",
  "type": "Exercise",
  "number": "2.3.1.2",
  "title": "",
  "body": " Give the full URL to your GitHub profile, for example https:\/\/github.com\/yourUsername          Thank you.      Please give the full URL using the format indicated in the question.     "
},
{
  "id": "topic-github-pat-2",
  "level": "2",
  "url": "topic-github-set-up.html#topic-github-pat-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Personal Access Token (PAT) "
},
{
  "id": "ex-getting-pat",
  "level": "2",
  "url": "topic-github-set-up.html#ex-getting-pat",
  "type": "Exercise",
  "number": "2.3.2.1",
  "title": "",
  "body": " Follow GitHub's instructions for creating a (classic) personal access token: Creating a Personal Access Token (classic) .  When doing so be sure to:   Choose “repo” for the “scopes and permissions.”    Be sure to copy and paste your PAT somewhere safe – maybe e-mail it to yourself. You will not be able to retrieve it again after you leave the page.     "
},
{
  "id": "ex-github-pat",
  "level": "2",
  "url": "topic-github-set-up.html#ex-github-pat",
  "type": "Exercise",
  "number": "2.3.2.2",
  "title": "",
  "body": " What are the first 4 characters of your GitHub PAT?     gpat          ghp_    All GitHub PATs begin with ghp_      PAT_        "
},
{
  "id": "ex-codespace-timeout-setting",
  "level": "2",
  "url": "topic-github-set-up.html#ex-codespace-timeout-setting",
  "type": "Exercise",
  "number": "2.3.3.1",
  "title": "",
  "body": " Use the following steps to adjust the timeout for your Codespaces, including the GitKit developent environment.   Open your GitHub Codespaces settings by visiting .   Scroll down to the section labeled \"Default idle timeout\", adjust the timeout to 15 minutes, and click \"Save\".  "
},
{
  "id": "topic-the-issue-tracker",
  "level": "1",
  "url": "topic-the-issue-tracker.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Issue Tracker",
  "body": " The Issue Tracker   FOSS projects often use an issue tracker to maintain a list of bugs to be fixed, features to be added and other tasks to be completed. Thus, the issue tracker is a good place to go in order to find something to work on in a FOSS project. The exercises in this section will guide you through interaction with the GitKit FarmData2 issue tracker as shown in . By the end of the section you will have found an issue to work on.    The GitKit FarmData2 issue tracker in GitHub.   The GitHub issue tracker displaying issues from the GitKit FarmData2 repository.       Exploring the Issue Tracker     The tasks in this exercise will help you to find the issue tracker for the GitKit FarmData2 repository that you will be using.   Visit the URL that your instructor provided for the GitKit FarmData2 repository that you will be using as the upstream repository for your course.   Click the \"Issues\" tab near the top of the page to go to the issue tracker. This will take you to a page similar to the one shown in .    Use the issue tracker in the GitKit FarmData2 repository to complete the following tasks.   Every issue has a number and a title. What is the title of issue #10?     Add Missing \"that\"      Seeding Report: Allows Invalid Inputs      Seeding Input: Duplicates appearing in Area Dropdown      Dickinson College Farm Link     Be sure you are looking at issue #10.   Each issue can have tags that can be used to sort and categorize issues. Select all of the tags that are associated with issue #8?      Documentation        Round1        Enhancement        Typos        Bug        UI\/UX      Be sure you are looking at issue #8.   Which file in the repo would you need to modify in order to fix the typo described in issue #11?    ONBOARDING.md    INSTALL.md    CONTRIBUTING.md    LICENSE.md    Be sure you are looking at issue #11.   Which of the following indicate an order by which the issues can be sorted?    Newest    Oldest    Recently updated    Most commented    Most difficult    Highest priority    Find the \"Sort\" drop-down in the issue tracker and see what \"Sort by\" options there are.   Match issue tracker sort orders on the left to a reason for sorting in that order on the right.   You can do it! Try again!    Created on  Find issues you have not seen before    Last updated  Check if any issues you have been assigned to have had their requirements changed    Total comments  Find which issues are being most actively worked on    Choose the best match.      Claiming an Issue   Because projects often have many people working asynchronously many will have a process by which contributors can claim an issue that they are interested in working on and have that issue assigned to them in the issue tracker.  The following exercises will guide you through the process of claiming an issue to work on in the GitKit FarmData2 issue tracker.      Examine the GitKit FarmData2 issue tracker. How can you tell which issue have already been assigned?    The avatar of the assigned user appears to the right of the issue title.    The issue no longer appears in the issue tracker.    The username of assigned user appears next to the issue title.    The issue is moved to a separate list of assigned issues.    The issue tracker does not show any indication that an issue has been assigned.    Look for some lines for issues that look different than the others and hover your mouse over the different parts.   In the GitKit FarmData2 issue tracker, contributors interested in working on an issue can request that it be assigned to them by commenting on the issue with the exact message:   I would like to work on this please!   The first person who comments on an unclaimed issue with this message will receive a response from the project maintainers. This messages will indicate that the issue has been assigned to them and the issue tracker will update to show this as you saw in .   Use the GitKit FarmData2 issue tracker to complete the following tasks.   Choose an unassigned issue with a \"Round 1\" tag.   See for information about identifying assigned and unassigned issues.   Comment on the issue that you chose using the message above to claim it.   Click on the issue title to open the issue and use the \"Add a comment\" box at the bottom of the page.  Remember you must type the message exactly as shown.   Reload the issue tracker and check that you received a response and that the issue has been assigned to you.   If you did not receive a response, wait a few minutes and reload the issue tracker page again. Sometimes it takes a few minutes for your comment to be noticed and the issue to be assigned. If you still do not receive a response check that you typed the message correctly.  If you received a response telling you that you were not assigned the issue, someone else slipped a comment in just ahead of you and was assigned the issue. If this happens, just try again.    Give the full URL to the issue that you have been assigned, for example https:\/\/github.com\/my-class\/GitKit-FarmData2\/issues\/2          Thank you.      Please give the full URL using the format indicated in the question.       It is worth noting that different projects will have different processes for claiming and assigning issues, and some projects may not assign issues at all. What are some advantages and disadvantages of assigning issues to specific individuals?  Match the reasons on the left with \"Advantage\" or \"Disadvantage\" on the right.   You can do it! Try again!    To prevent wasting effort by having two developers work on the same issue  Advantage    Allow a developer to \"hold on\" to an issue, even if they are not currently working on it.  Disadvantage    To plan in advance who will be working each issue  Advantage    Think about this from both the individual developer's perspective and from the overall project's perspective.     "
},
{
  "id": "fig-issue-tracker",
  "level": "2",
  "url": "topic-the-issue-tracker.html#fig-issue-tracker",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " The GitKit FarmData2 issue tracker in GitHub.   The GitHub issue tracker displaying issues from the GitKit FarmData2 repository.   "
},
{
  "id": "ex-find-the-issue-tracker",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-find-the-issue-tracker",
  "type": "Exercise",
  "number": "2.4.1.1",
  "title": "",
  "body": " The tasks in this exercise will help you to find the issue tracker for the GitKit FarmData2 repository that you will be using.   Visit the URL that your instructor provided for the GitKit FarmData2 repository that you will be using as the upstream repository for your course.   Click the \"Issues\" tab near the top of the page to go to the issue tracker. This will take you to a page similar to the one shown in .  "
},
{
  "id": "ex-explore-the-issue-tracker",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-explore-the-issue-tracker",
  "type": "Exercise",
  "number": "2.4.1.2",
  "title": "",
  "body": " Use the issue tracker in the GitKit FarmData2 repository to complete the following tasks.   Every issue has a number and a title. What is the title of issue #10?     Add Missing \"that\"      Seeding Report: Allows Invalid Inputs      Seeding Input: Duplicates appearing in Area Dropdown      Dickinson College Farm Link     Be sure you are looking at issue #10.   Each issue can have tags that can be used to sort and categorize issues. Select all of the tags that are associated with issue #8?      Documentation        Round1        Enhancement        Typos        Bug        UI\/UX      Be sure you are looking at issue #8.   Which file in the repo would you need to modify in order to fix the typo described in issue #11?    ONBOARDING.md    INSTALL.md    CONTRIBUTING.md    LICENSE.md    Be sure you are looking at issue #11.   Which of the following indicate an order by which the issues can be sorted?    Newest    Oldest    Recently updated    Most commented    Most difficult    Highest priority    Find the \"Sort\" drop-down in the issue tracker and see what \"Sort by\" options there are.   Match issue tracker sort orders on the left to a reason for sorting in that order on the right.   You can do it! Try again!    Created on  Find issues you have not seen before    Last updated  Check if any issues you have been assigned to have had their requirements changed    Total comments  Find which issues are being most actively worked on    Choose the best match.  "
},
{
  "id": "topic-the-issue-tracker-4-2-1",
  "level": "2",
  "url": "topic-the-issue-tracker.html#topic-the-issue-tracker-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "claim assigned "
},
{
  "id": "ex-identifying-assigned-issues",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-identifying-assigned-issues",
  "type": "Exercise",
  "number": "2.4.2.1",
  "title": "",
  "body": " Examine the GitKit FarmData2 issue tracker. How can you tell which issue have already been assigned?    The avatar of the assigned user appears to the right of the issue title.    The issue no longer appears in the issue tracker.    The username of assigned user appears next to the issue title.    The issue is moved to a separate list of assigned issues.    The issue tracker does not show any indication that an issue has been assigned.    Look for some lines for issues that look different than the others and hover your mouse over the different parts.  "
},
{
  "id": "ex-claim-an-issue",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-claim-an-issue",
  "type": "Exercise",
  "number": "2.4.2.2",
  "title": "",
  "body": " Use the GitKit FarmData2 issue tracker to complete the following tasks.   Choose an unassigned issue with a \"Round 1\" tag.   See for information about identifying assigned and unassigned issues.   Comment on the issue that you chose using the message above to claim it.   Click on the issue title to open the issue and use the \"Add a comment\" box at the bottom of the page.  Remember you must type the message exactly as shown.   Reload the issue tracker and check that you received a response and that the issue has been assigned to you.   If you did not receive a response, wait a few minutes and reload the issue tracker page again. Sometimes it takes a few minutes for your comment to be noticed and the issue to be assigned. If you still do not receive a response check that you typed the message correctly.  If you received a response telling you that you were not assigned the issue, someone else slipped a comment in just ahead of you and was assigned the issue. If this happens, just try again.  "
},
{
  "id": "ex-round1-issue-url",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-round1-issue-url",
  "type": "Exercise",
  "number": "2.4.2.3",
  "title": "",
  "body": " Give the full URL to the issue that you have been assigned, for example https:\/\/github.com\/my-class\/GitKit-FarmData2\/issues\/2          Thank you.      Please give the full URL using the format indicated in the question.     "
},
{
  "id": "ex-why-not-assign-issues",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-why-not-assign-issues",
  "type": "Exercise",
  "number": "2.4.2.4",
  "title": "",
  "body": " It is worth noting that different projects will have different processes for claiming and assigning issues, and some projects may not assign issues at all. What are some advantages and disadvantages of assigning issues to specific individuals?  Match the reasons on the left with \"Advantage\" or \"Disadvantage\" on the right.   You can do it! Try again!    To prevent wasting effort by having two developers work on the same issue  Advantage    Allow a developer to \"hold on\" to an issue, even if they are not currently working on it.  Disadvantage    To plan in advance who will be working each issue  Advantage    Think about this from both the individual developer's perspective and from the overall project's perspective.  "
},
{
  "id": "topic-basic-foss-workflow",
  "level": "1",
  "url": "topic-basic-foss-workflow.html",
  "type": "Section",
  "number": "2.5",
  "title": "Basic FOSS Workflow Concepts",
  "body": " Basic FOSS Workflow Concepts   Now that you have found an issue to work on, you will need to collaborate with the project community to fix that issue. Collaboration in FOSS communities follows patterns of behavior known as workflows . shows a basic version of one FOSS workflow that is used by contributors working on FOSS projects.    A basic FOSS workflow.   Forking the main project repo creates your remote copy in your GitHub spacey. Cloning your remote copy creates your local copy in your local development environment. Changes that you make to your local copy can be contributed to the main project by pushing them to your remote copy and creating a pull request.        The exercises in this section will help to familiarize you with the terminology and the process of this basic FOSS workflow.   GitHub uses specific terminology to refer to the copies of the repository. Match the GitHub terminology on the left with the repository in to which it refers on the right.    Upstream  Main project repository    Origin  Your Remote Copy    Local Clone  Local Copy of Your Remote Copy    Review the diagrams of the basic FOSS workflow from the in the class materials.     illustrates a basic FOSS workflow similar to what is used in many FOSS projects. This workflow has the following 5 steps: Fork , Clone , Edit , Push , and Pull Request . Match each term on the left with the appropriate description on the right.    Fork  Create a copy of the main project repository in your GitHub space.    Clone  Create a copy of your remote copy of the repository into your local development environment.    Edit  Make changes to your local copy of the repository (e.g. to fix a bug).    Push  Copy your changes into your remote copy of the repository.    Pull Request  Ask that the project maintainers incorporate your changes into the main project repository.    Review the diagrams of the basic FOSS workflow from the in the class materials.    Drag the steps of the basic FOSS workflow into the order that they are likely to occur when working on a project.    Fork    Clone    Edit    Push    Pull Request    Imagine the process you would go through when starting to work on a project, fixing a bug, and contributing your changes back to the main project.    "
},
{
  "id": "topic-basic-foss-workflow-2-1",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#topic-basic-foss-workflow-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "workflows "
},
{
  "id": "fig-basic-foss-workflow",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#fig-basic-foss-workflow",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": " A basic FOSS workflow.   Forking the main project repo creates your remote copy in your GitHub spacey. Cloning your remote copy creates your local copy in your local development environment. Changes that you make to your local copy can be contributed to the main project by pushing them to your remote copy and creating a pull request.   "
},
{
  "id": "ex-github-repository-terminology",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#ex-github-repository-terminology",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": " GitHub uses specific terminology to refer to the copies of the repository. Match the GitHub terminology on the left with the repository in to which it refers on the right.    Upstream  Main project repository    Origin  Your Remote Copy    Local Clone  Local Copy of Your Remote Copy    Review the diagrams of the basic FOSS workflow from the in the class materials.  "
},
{
  "id": "ex-workflow-step-definitions",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#ex-workflow-step-definitions",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "  illustrates a basic FOSS workflow similar to what is used in many FOSS projects. This workflow has the following 5 steps: Fork , Clone , Edit , Push , and Pull Request . Match each term on the left with the appropriate description on the right.    Fork  Create a copy of the main project repository in your GitHub space.    Clone  Create a copy of your remote copy of the repository into your local development environment.    Edit  Make changes to your local copy of the repository (e.g. to fix a bug).    Push  Copy your changes into your remote copy of the repository.    Pull Request  Ask that the project maintainers incorporate your changes into the main project repository.    Review the diagrams of the basic FOSS workflow from the in the class materials.  "
},
{
  "id": "ex-workflow-step-order",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#ex-workflow-step-order",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": " Drag the steps of the basic FOSS workflow into the order that they are likely to occur when working on a project.    Fork    Clone    Edit    Push    Pull Request    Imagine the process you would go through when starting to work on a project, fixing a bug, and contributing your changes back to the main project.  "
},
{
  "id": "topic-forking-the-upstream",
  "level": "1",
  "url": "topic-forking-the-upstream.html",
  "type": "Section",
  "number": "2.6",
  "title": "Forking the Upstream Repository",
  "body": " Forking the Upstream Repository   In you saw how FOSS communities can use a basic workflow to collaborate. In this section you will begin to gain hands-on experience with that workflow. illustrates first step in the workflow. In this step you will fork the main project repository, which creates a copy of it into your own GitHub space.    Forking the main project repository.   Creating a fork of the main project repo creates a copy of it in your own GitHub space. This copy is your remote copy.     Note that when working on the GitKit you will not actually be interacting with the main FarmData2 repository. Instead, you will be interacting with a copy of the FarmData2 repository that was created just for these activities. That said, you will be treating this copy exactly as if it is the “Main Project Repo” or the upstream repository. This allows you, your classmates and many other students to practice interacting with an upstream project for learning purposes without affecting the main FarmData2 repository.      Your instructor will have provided you with the URL of the GitKit FarmData2 repository that you will be using as the main project repo (i.e. the upstream) for the exercises in this text.  Give the full URL to the GitKit FarmData2 repository that you will be using as the upstream, for example: https:\/\/github.com\/yourClass\/theRepoName          Thank you.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to use the URL that your instructor has given you.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to use the URL that your instructor has given you.      Please give the full URL using the format indicated in the question.      Check the course materials from your instructor. It should provide the URL of the GitKit FarmData2 repository that was created for your course.  The URL should include something that refers to your course name, not your GitHub username.    Visit the upstream repository from in your browser and then complete the following tasks to create your fork.   Find the \"Fork\" button on the upstream repository page.  The fork button.     The fork button will be toward the upper right hand corner of the browser window.   Click the “Fork” button to create your own fork of the upstream repository. Be sure to pick the GitHub username that is at the end of the URL you used in in the \"Choose an owner\" box so that your fork will be created in your GitHub space.    Give the full URL of your fork of the upstream, for example: https:\/\/github.com\/yourGitHub\/theRepoName          Thank you.      Looks like you might be giving the URL of the real FarmData2 upstream. Be sure to give the URL of the fork you created in your GitHub space.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to give the URL of the fork you created in your GitHub space.      Please give the full URL using the format indicated in the question.      The URL you give here should contain your GitHub username. Be sure you are looking the copy of the GitKit FarmData2 repository that is in your GitHub space.    Notice that in there is an dashed orange arrow pointing from your remote copy (i.e. your origin) to the main project repo (i.e. the upstream). This arrow is indicating that your fork knows where the upstream project repository is located.   Visit your origin repository on GitHub. There is a link on that page that corresponds to the orange dashed arrow in . What appears before the link?     forked from      The Octokitty (GitHub) logo      Fork your own copy of (in the Fork drop-down)     This text and link will be near the repository name in the upper left corner of the window.   Which step of the basic FOSS workflow would require that your origin repository know the location of the upstream repository?     Pull request      Fork      Clone      Edit      Push     Think about which step of the basic FOSS workflow needs to send information back to the main project.   Why does your origin repository keep track of the location of the upstream repository from which it was forked?     So that you can make a pull request back to the original project.      So that you can get back to the original project to access the issue tracker.      So that you can clone the project again.      So that you can pull changes provided by other contributors.      So that you can push changes back to the original project.     Think about which steps of the basic FOSS workflow need access back to the main project.    When you forked the upstream repository, GitHub made a copy of that repository into your GitHub space.  But, it did not make a copy of the issue tracker and its issues into your GitHub space.  Why do you think the designers of GitHub decided that the issue tracker should not be copied into the fork?     Because it would be hard for the maintainers of the original project to find issues entered in forks.      Because contributors would not know which issue tracker to enter new issues into.      Because it would be hard to keep issue descriptions and discussions up-to-date across multiple issue trackers.      Because only the maintainers of the original project should be allowed to add new issues.     Why would it be confusing to have multiple issue trackers for a project?    "
},
{
  "id": "topic-forking-the-upstream-2-1",
  "level": "2",
  "url": "topic-forking-the-upstream.html#topic-forking-the-upstream-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fork "
},
{
  "id": "fig-basic-workflow-fork",
  "level": "2",
  "url": "topic-forking-the-upstream.html#fig-basic-workflow-fork",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": " Forking the main project repository.   Creating a fork of the main project repo creates a copy of it in your own GitHub space. This copy is your remote copy.   "
},
{
  "id": "ex-upstream-url",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-upstream-url",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": " Your instructor will have provided you with the URL of the GitKit FarmData2 repository that you will be using as the main project repo (i.e. the upstream) for the exercises in this text.  Give the full URL to the GitKit FarmData2 repository that you will be using as the upstream, for example: https:\/\/github.com\/yourClass\/theRepoName          Thank you.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to use the URL that your instructor has given you.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to use the URL that your instructor has given you.      Please give the full URL using the format indicated in the question.      Check the course materials from your instructor. It should provide the URL of the GitKit FarmData2 repository that was created for your course.  The URL should include something that refers to your course name, not your GitHub username.  "
},
{
  "id": "ex-create-your-fork",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-create-your-fork",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": " Visit the upstream repository from in your browser and then complete the following tasks to create your fork.   Find the \"Fork\" button on the upstream repository page.  The fork button.     The fork button will be toward the upper right hand corner of the browser window.   Click the “Fork” button to create your own fork of the upstream repository. Be sure to pick the GitHub username that is at the end of the URL you used in in the \"Choose an owner\" box so that your fork will be created in your GitHub space.  "
},
{
  "id": "ex-fork-url",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-fork-url",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": " Give the full URL of your fork of the upstream, for example: https:\/\/github.com\/yourGitHub\/theRepoName          Thank you.      Looks like you might be giving the URL of the real FarmData2 upstream. Be sure to give the URL of the fork you created in your GitHub space.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to give the URL of the fork you created in your GitHub space.      Please give the full URL using the format indicated in the question.      The URL you give here should contain your GitHub username. Be sure you are looking the copy of the GitKit FarmData2 repository that is in your GitHub space.  "
},
{
  "id": "ex-upstream-ref-from-origin",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-upstream-ref-from-origin",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": " Notice that in there is an dashed orange arrow pointing from your remote copy (i.e. your origin) to the main project repo (i.e. the upstream). This arrow is indicating that your fork knows where the upstream project repository is located.   Visit your origin repository on GitHub. There is a link on that page that corresponds to the orange dashed arrow in . What appears before the link?     forked from      The Octokitty (GitHub) logo      Fork your own copy of (in the Fork drop-down)     This text and link will be near the repository name in the upper left corner of the window.   Which step of the basic FOSS workflow would require that your origin repository know the location of the upstream repository?     Pull request      Fork      Clone      Edit      Push     Think about which step of the basic FOSS workflow needs to send information back to the main project.   Why does your origin repository keep track of the location of the upstream repository from which it was forked?     So that you can make a pull request back to the original project.      So that you can get back to the original project to access the issue tracker.      So that you can clone the project again.      So that you can pull changes provided by other contributors.      So that you can push changes back to the original project.     Think about which steps of the basic FOSS workflow need access back to the main project.  "
},
{
  "id": "ex-no-issue-tracker-in-fork",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-no-issue-tracker-in-fork",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": " When you forked the upstream repository, GitHub made a copy of that repository into your GitHub space.  But, it did not make a copy of the issue tracker and its issues into your GitHub space.  Why do you think the designers of GitHub decided that the issue tracker should not be copied into the fork?     Because it would be hard for the maintainers of the original project to find issues entered in forks.      Because contributors would not know which issue tracker to enter new issues into.      Because it would be hard to keep issue descriptions and discussions up-to-date across multiple issue trackers.      Because only the maintainers of the original project should be allowed to add new issues.     Why would it be confusing to have multiple issue trackers for a project?  "
},
{
  "id": "topic-development-environment",
  "level": "1",
  "url": "topic-development-environment.html",
  "type": "Section",
  "number": "2.7",
  "title": "Your Development Environment",
  "body": " Your Development Environment   You have been assigned an issue to work on and you have created a fork of the upstream GitKit FarmData2 repository into your GitHub space.  To work on your issue you will need to setup a development environment . The development environment is where you will create your clone of the repository, where you will edit files, and where you will use Git commands to add your changes to your clone and push those changes to your origin .  Many FOSS contributors will setup the development environment on their personal machines. However, because student machines vary greatly the GitKit provides a browser based development environment that you will access using your web browser. This development environment is guaranteed to be the same for everyone that uses it. It includes a code editor, development tools, and a few features designed specifically to help you stay on track when completing the GitKit's hands-on exercises.  In this section you will create a new development environment, learn how to stop and restart the development environment, and do some necessary configuration of Git.    Creating the Development Environment   The development environment will run in the cloud using a service called GitHub Codespaces , and you will access it using your web browser.     The following tasks will guide you through the process of creating the development environment.   Ensure that you are logged into the GitHub account that you listed in .   Click this link to create the Development Environment .   Click the \"Create new codespace\" button on the page that appears.   Wait for the development environment to be created. Your browser window will refresh and change a few times during the creation process. Please be patient as this can take a few minutes.  After a few minutes, your browser window will look similar to including the prompt asking you to paste your GitHub Personal Access Token (PAT).   The GitKit development environment prompting for a GitHub PAT during creation.   The GitKit Development Environment prompting for a GitHub PAT during creation.    If you do not see the prompt asking you to paste your PAT after a few minutes try:   Reloading your browser tab.    Clearing your browser cache and reloading your browser tab.    Checking that your browser is fully supported by Codespaces .      Paste the PAT that you created in and press enter. Note, for security reasons your PAT is not displayed when it is pasted.  If you have lost or did not save your PAT, revisit and create a new one.   After pasting your PAT, the development environment will finish being created. When the development environment is fully created your browser window will look similar to including the \"Kit development environment is ready for use\" message.   The GitKit development environment with the \"Kit development environment is ready for use\" message.   The GitKit Development Environment with the \"Kit development environment is ready for use\" message.        Stopping the Development Environment   At some point you will complete an assignment or want to take a break and do other things. When you do so, you should stop the development environment. This will ensure that you do not consume more of your free Codespaces time than necessary.      Use the following steps to practice stopping the development environment.   Click on the word \"Codespaces\" in the bottom left of the browser window.   Select \"Stop Current Codespace\" from the menu that appears in the top center of the browser window.   Close the browser tab containing the development environment.      Re-starting the Development Environment   When you return to work after stopping the development environment, you will need to restart it.      Use the following steps to restart the development environment.   Click here to open your development environment .   Click the \"Resume this codespace\" button.  Do not click the \"Create a new one\" button because a new development environment will not contain any of your prior work.   Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use\" and your browser window will look similar to .   The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.   The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.        The Git Client   Your development environment includes a Git client . The Git client is the tool that you will use to interact with Git repositories, such as the GitKit FarmData2 repository.  There are lots of different Git clients. Some are graphical and some use a text interface. These exercises, introduce you to Git using the text-based Git command line interface (CLI) . This is the most general way to interact with Git and will provide a conceptual foundation for using any other Git client that you might encounter.      The Git CLI is accessed by using the git command in the terminal.   Using the git command without any additional arguments displays information about how to use git .  Enter the command git into the terminal in the development environment and press enter.   Use the output from the git command in to determine which of the following commands will cause, git to \"Show the working tree status.\"      git status     The git status command causes git to display the status of the working tree.       git tree     Check the output of the git command.       git working-tree     Check the output of the git command.       git show     Check the output of the git command.     Check the output of the git command for the command that will \"Show the working tree status.\"      Configuring the Git Client   Git repositories maintain a complete history of all changes, including who made each change. To do this, Git needs to know a little bit of information about you.  Git identifies the author of each change using two pieces of information: A name and an email . For name, you might decide to use your full name, or a nickname, or your GitHub username. Just keep in mind that whatever name you use will be associated with all of the changes you make. For email, you can use any valid e-mail associated with you.  The exercises in this section will guide you through the process of configuring your name and email in the Git client in the development environment.      The git config --global user.name \"<name>\" command sets the name that Git will associate with your changes.  Give a command that will set the name you want to have associated with your changes by replacing <name> with the name you wish to use.         This command will set the name associated with your changes in git.      You should not include the < and > in your command.      Be sure to use quotation marks around your name.      Reread the question and check the format of your command.       The git config --global user.email \"<email>\" command sets the email address that Git will associate with your changes.  Give a command that will set the email you want to have associated with your changes by replacing <email> with the email address you wish to use.         This command will set the email associated with your changes in git.      Be sure you have entered a valid email address.      You should not include the < and > in your command.      Be sure to use quotation marks around your email.      Reread the question and check the format of your command.       Enter your commands from and into the Terminal.  Then use the command git config --global --list to display the Git configuration. Examine the output and select all of the Git configuration keys that have values assigned to them.      user.name      user.name should be set to the name you used above.       user.email      user.email should be set to the email you used above.       core.editor      core.editor should be set to the nano editor.       git.user      git.user is not a setting.       gitkit.class      gitkit.class is not a setting.       "
},
{
  "id": "topic-dev-env-intro-1",
  "level": "2",
  "url": "topic-development-environment.html#topic-dev-env-intro-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "issue fork upstream "
},
{
  "id": "topic-dev-env-intro-2",
  "level": "2",
  "url": "topic-development-environment.html#topic-dev-env-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "development environment clone push origin "
},
{
  "id": "topic-create-devenv-2-1",
  "level": "2",
  "url": "topic-development-environment.html#topic-create-devenv-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "GitHub Codespaces "
},
{
  "id": "ex-create-devenv",
  "level": "2",
  "url": "topic-development-environment.html#ex-create-devenv",
  "type": "Exercise",
  "number": "2.7.1.1",
  "title": "",
  "body": " The following tasks will guide you through the process of creating the development environment.   Ensure that you are logged into the GitHub account that you listed in .   Click this link to create the Development Environment .   Click the \"Create new codespace\" button on the page that appears.   Wait for the development environment to be created. Your browser window will refresh and change a few times during the creation process. Please be patient as this can take a few minutes.  After a few minutes, your browser window will look similar to including the prompt asking you to paste your GitHub Personal Access Token (PAT).   The GitKit development environment prompting for a GitHub PAT during creation.   The GitKit Development Environment prompting for a GitHub PAT during creation.    If you do not see the prompt asking you to paste your PAT after a few minutes try:   Reloading your browser tab.    Clearing your browser cache and reloading your browser tab.    Checking that your browser is fully supported by Codespaces .      Paste the PAT that you created in and press enter. Note, for security reasons your PAT is not displayed when it is pasted.  If you have lost or did not save your PAT, revisit and create a new one.   After pasting your PAT, the development environment will finish being created. When the development environment is fully created your browser window will look similar to including the \"Kit development environment is ready for use\" message.   The GitKit development environment with the \"Kit development environment is ready for use\" message.   The GitKit Development Environment with the \"Kit development environment is ready for use\" message.    "
},
{
  "id": "ex-stopping-devenv",
  "level": "2",
  "url": "topic-development-environment.html#ex-stopping-devenv",
  "type": "Exercise",
  "number": "2.7.2.1",
  "title": "",
  "body": " Use the following steps to practice stopping the development environment.   Click on the word \"Codespaces\" in the bottom left of the browser window.   Select \"Stop Current Codespace\" from the menu that appears in the top center of the browser window.   Close the browser tab containing the development environment.  "
},
{
  "id": "ex-restarting-devenv",
  "level": "2",
  "url": "topic-development-environment.html#ex-restarting-devenv",
  "type": "Exercise",
  "number": "2.7.3.1",
  "title": "",
  "body": " Use the following steps to restart the development environment.   Click here to open your development environment .   Click the \"Resume this codespace\" button.  Do not click the \"Create a new one\" button because a new development environment will not contain any of your prior work.   Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use\" and your browser window will look similar to .   The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.   The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.    "
},
{
  "id": "topic-git-client-2-1",
  "level": "2",
  "url": "topic-development-environment.html#topic-git-client-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Git client "
},
{
  "id": "topic-git-client-2-2",
  "level": "2",
  "url": "topic-development-environment.html#topic-git-client-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "command line interface (CLI) "
},
{
  "id": "ex-git-version",
  "level": "2",
  "url": "topic-development-environment.html#ex-git-version",
  "type": "Exercise",
  "number": "2.7.4.1",
  "title": "",
  "body": " The Git CLI is accessed by using the git command in the terminal.   Using the git command without any additional arguments displays information about how to use git .  Enter the command git into the terminal in the development environment and press enter.   Use the output from the git command in to determine which of the following commands will cause, git to \"Show the working tree status.\"      git status     The git status command causes git to display the status of the working tree.       git tree     Check the output of the git command.       git working-tree     Check the output of the git command.       git show     Check the output of the git command.     Check the output of the git command for the command that will \"Show the working tree status.\"  "
},
{
  "id": "topic-git-configuration-2-2",
  "level": "2",
  "url": "topic-development-environment.html#topic-git-configuration-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "name email "
},
{
  "id": "ex-git-config-name",
  "level": "2",
  "url": "topic-development-environment.html#ex-git-config-name",
  "type": "Exercise",
  "number": "2.7.5.1",
  "title": "",
  "body": " The git config --global user.name \"<name>\" command sets the name that Git will associate with your changes.  Give a command that will set the name you want to have associated with your changes by replacing <name> with the name you wish to use.         This command will set the name associated with your changes in git.      You should not include the < and > in your command.      Be sure to use quotation marks around your name.      Reread the question and check the format of your command.     "
},
{
  "id": "ex-git-config-email",
  "level": "2",
  "url": "topic-development-environment.html#ex-git-config-email",
  "type": "Exercise",
  "number": "2.7.5.2",
  "title": "",
  "body": " The git config --global user.email \"<email>\" command sets the email address that Git will associate with your changes.  Give a command that will set the email you want to have associated with your changes by replacing <email> with the email address you wish to use.         This command will set the email associated with your changes in git.      Be sure you have entered a valid email address.      You should not include the < and > in your command.      Be sure to use quotation marks around your email.      Reread the question and check the format of your command.     "
},
{
  "id": "ex-configure-git",
  "level": "2",
  "url": "topic-development-environment.html#ex-configure-git",
  "type": "Exercise",
  "number": "2.7.5.3",
  "title": "",
  "body": " Enter your commands from and into the Terminal.  Then use the command git config --global --list to display the Git configuration. Examine the output and select all of the Git configuration keys that have values assigned to them.      user.name      user.name should be set to the name you used above.       user.email      user.email should be set to the email you used above.       core.editor      core.editor should be set to the nano editor.       git.user      git.user is not a setting.       gitkit.class      gitkit.class is not a setting.    "
},
{
  "id": "topic-cloning-your-origin",
  "level": "1",
  "url": "topic-cloning-your-origin.html",
  "type": "Section",
  "number": "2.8",
  "title": "Cloning Your Origin",
  "body": " Cloning Your Origin   The next step in the basic FOSS workflow is to ensure that you have a clone of your origin repository in your development environment as shown in . Having a clone of your origin in your development environment will allow you to edit the files to fix the issue that you have been assigned and add those changes to the repository.    Cloning your origin repository from your GitHub space to your development environment.   Creating a clone of your origin repository creates a copy of it in your development environment. This copy is your local copy.       Clone URL  In order to clone a repository into your development environment you will need the clone URL for that repository. The steps in this section will help you find the clone URL for your origin repository.     Visit the GitHub page for your origin repository.   You can find the URl of your origin (i.e. your fork of the GitKit FarmData2 upstream) in your answer to .    Find and click the green \"Code\" button.  The green \"Code\" button in GitHub.      Open the \"Local\" and \"HTTPS\" tabs as shown here:  The GitHub dialog showing the clone URL.  The URL in the \"Clone using the web URL\" box is the clone URL that you will need to clone your origin repository.    Copy and paste the clone URL that you will use to clone your origin as your answer to this exercise.         Thank you.      It looks like you might be trying to use the upstream repository instead of your origin.      It looks like you might be trying to use the upstream repository instead of your origin.      The clone URL should have the format https:\/\/github.com\/yourGitHubUsername\/theRepoName.git .      Be sure you are using your GitHub origin repository (see ). This clone URL should contain your GitHub username and end in .git .      git clone  The git clone command will make a copy of your fork on GitHub and make the Local Copy on your computer (in your development environment). Refer to Figure .  Now that you have the clone URL for your origin repository, use the steps in this section to clone your origin into your development environment.  You will use the following command in the Terminal to clone your origin repository into your development environment:   git clone <URL>   Be sure to replace <URL> with the clone URL you found in .     Enter the full command that you will use to clone your origin as your answer to this exercise.         Thank you.      It looks like you might be trying to use the upstream repository instead of your origin.      It looks like you might be trying to use the upstream repository instead of your origin.      The clone URL should have the format https:\/\/github.com\/yourGitHubUsername\/theRepoName.git .      Execute the command from in your terminal.   Which of the following appear in the output from entering the command from ?    Cloning into    Sending objects    Deleting objects    Resolving deltas    Counting objects    local:    Look at the output in your terminal.    Which line of output from entering the command from indicates the directory into which the repository was cloned?    Cloning into    remote: Enumerating objects    remote: Counting objects    remote: Total    Receiving objects    Resolving deltas    Look for a line in the output that begins with \"Cloning into\".    Use the ls command to confirm that the directory you identified in now exists.  If it it does not, check the output in for error messages and try again.      Exploring Your Cloned Repository In Your Development Environment  In this section you will briefly explore the GitKit FarmData2 repository that you have cloned into your development environment.     Use the cd command in the Terminal to change into the directory containing your clone of the GitKit FarmData2 repository.  See for the name of the directory.    Use the ls -a command to display the names of all of the files and directories in your clone of the GitKit FarmData2 repository.  Compare these files and directories to those in your origin repository on GitHub.  Check all files and directories that do not appear both locally and on GitHub.      .        ..        .git        README.md        .kit        .vscode         git remote  In this section you will see that your clone keeps track of the location of your origin repository. It does this using a piece of information called a remote , which Git uses to store the URLs of remote repositories in the cloud (e.g. on GitHub).  The command git remote on its own will show you the names of the remotes that git knows about, but not their URLS.  If you want to have git display the URLs of the remotes as well, you will need to add the -v or --verbose flag: git remote -v      Which command will show you the URL(s) of the remote(s) that git knows about?      git remote -v        git remote        git remote -url        git url      You are asking git remote to give you more information.    Execute the command git remote -v in your terminal. How can you tell from that output that your clone knows about your origin?     The \"origin\" lines have a URL with your GitHub username in them.      There are lines that say \"origin\".      The \"origin\" lines have a URL that points to GitHub.      It is not possible to tell from the output.     Look closely at the \"origin\" URLs.    How is the origin remote that you see in the output of the command represented in ?     The orange dotted arrow from the clone to the origin repository.      The orange dotted arrow from the origin to the upstream repository.      The orange dotted arrow from the clone to the upstream repository.      The blue \"Clone\" arrow from the origin to the cloned repository.      The origin remote is not represented in the figure.     Which arrow would represent the clone knowing the location of the origin?    Which step of the basic FOSS workflow requires that your clone know the location of your origin repository?     Pull request      Fork      Clone      Edit      Push     Think about which step of the basic FOSS workflow will need to send information from the clone back to the origin.      Opening the GitKit-FarmData2 Repository Folder  You cloned your GitKit-FarmData2 respitory into a folder in your development environment with the command in .  But, you need to reopen your development environment in that folder to take advantage of all of the features that the KitClient provides for you.     Open the GitKit-FarmData2 folder.  You can do this by going to the \"hamburger\" (≡) menu in the upper left of your development environment window.  Choose File > Open Folder...   Select the GitKit-FarmData2 folder and click OK .  You will see Setting up your Codespace , and then your terminal will show a message from the Kit-tty .    The the output in should contain a message from the Kit-tty . What is the Kit-tty ?     Your personal virtual assistant.      A terminal.      A teletypewriter.      A pet kitten.     The \"Kit-tty\" introduces itself using the line \"😺💻 Meow, Kit-tty here!\" Read the description of the \"Kit-tty\" that follows this line.    Be sure to keep your eyes open for messages from the Kit-tty as you work on the GitKit exercises. The Kit-tty will help you to stay on track and may save you a lot of time by preventing you from going down an incorrect path.    "
},
{
  "id": "topic-cloning-your-origin-2-1",
  "level": "2",
  "url": "topic-cloning-your-origin.html#topic-cloning-your-origin-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "clone origin "
},
{
  "id": "fig-basic-workflow-clone",
  "level": "2",
  "url": "topic-cloning-your-origin.html#fig-basic-workflow-clone",
  "type": "Figure",
  "number": "2.8.1",
  "title": "",
  "body": " Cloning your origin repository from your GitHub space to your development environment.   Creating a clone of your origin repository creates a copy of it in your development environment. This copy is your local copy.   "
},
{
  "id": "topic-cloning-url-2",
  "level": "2",
  "url": "topic-cloning-your-origin.html#topic-cloning-url-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "clone URL "
},
{
  "id": "ex-find-clone-url-linux-a",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-find-clone-url-linux-a",
  "type": "Exercise",
  "number": "2.8.1.1",
  "title": "",
  "body": " Visit the GitHub page for your origin repository.   You can find the URl of your origin (i.e. your fork of the GitKit FarmData2 upstream) in your answer to .  "
},
{
  "id": "ex-find-clone-url-linux-b",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-find-clone-url-linux-b",
  "type": "Exercise",
  "number": "2.8.1.2",
  "title": "",
  "body": " Find and click the green \"Code\" button.  The green \"Code\" button in GitHub.    "
},
{
  "id": "ex-find-clone-url-linux-c",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-find-clone-url-linux-c",
  "type": "Exercise",
  "number": "2.8.1.3",
  "title": "",
  "body": " Open the \"Local\" and \"HTTPS\" tabs as shown here:  The GitHub dialog showing the clone URL.  The URL in the \"Clone using the web URL\" box is the clone URL that you will need to clone your origin repository.  "
},
{
  "id": "ex-clone-url-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-clone-url-linux",
  "type": "Exercise",
  "number": "2.8.1.4",
  "title": "",
  "body": " Copy and paste the clone URL that you will use to clone your origin as your answer to this exercise.         Thank you.      It looks like you might be trying to use the upstream repository instead of your origin.      It looks like you might be trying to use the upstream repository instead of your origin.      The clone URL should have the format https:\/\/github.com\/yourGitHubUsername\/theRepoName.git .      Be sure you are using your GitHub origin repository (see ). This clone URL should contain your GitHub username and end in .git .  "
},
{
  "id": "ex-clone-origin-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-clone-origin-linux",
  "type": "Exercise",
  "number": "2.8.2.1",
  "title": "",
  "body": " Enter the full command that you will use to clone your origin as your answer to this exercise.         Thank you.      It looks like you might be trying to use the upstream repository instead of your origin.      It looks like you might be trying to use the upstream repository instead of your origin.      The clone URL should have the format https:\/\/github.com\/yourGitHubUsername\/theRepoName.git .     "
},
{
  "id": "ex-clone-origin-linux-a",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-clone-origin-linux-a",
  "type": "Exercise",
  "number": "2.8.2.2",
  "title": "",
  "body": "Execute the command from in your terminal. "
},
{
  "id": "ex-clone-origin-linux-b",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-clone-origin-linux-b",
  "type": "Exercise",
  "number": "2.8.2.3",
  "title": "",
  "body": " Which of the following appear in the output from entering the command from ?    Cloning into    Sending objects    Deleting objects    Resolving deltas    Counting objects    local:    Look at the output in your terminal.  "
},
{
  "id": "ex-clone-origin-linux-c",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-clone-origin-linux-c",
  "type": "Exercise",
  "number": "2.8.2.4",
  "title": "",
  "body": " Which line of output from entering the command from indicates the directory into which the repository was cloned?    Cloning into    remote: Enumerating objects    remote: Counting objects    remote: Total    Receiving objects    Resolving deltas    Look for a line in the output that begins with \"Cloning into\".  "
},
{
  "id": "ex-clone-origin-linux-d",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-clone-origin-linux-d",
  "type": "Exercise",
  "number": "2.8.2.5",
  "title": "",
  "body": " Use the ls command to confirm that the directory you identified in now exists.  If it it does not, check the output in for error messages and try again.  "
},
{
  "id": "ex-explore-clone-linux-a",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-explore-clone-linux-a",
  "type": "Exercise",
  "number": "2.8.3.1",
  "title": "",
  "body": " Use the cd command in the Terminal to change into the directory containing your clone of the GitKit FarmData2 repository.  See for the name of the directory.  "
},
{
  "id": "ex-explore-clone-linux-b",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-explore-clone-linux-b",
  "type": "Exercise",
  "number": "2.8.3.2",
  "title": "",
  "body": " Use the ls -a command to display the names of all of the files and directories in your clone of the GitKit FarmData2 repository.  Compare these files and directories to those in your origin repository on GitHub.  Check all files and directories that do not appear both locally and on GitHub.      .        ..        .git        README.md        .kit        .vscode     "
},
{
  "id": "topic-git-remote-2",
  "level": "2",
  "url": "topic-cloning-your-origin.html#topic-git-remote-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "remote "
},
{
  "id": "ex-check-remotes-a",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-check-remotes-a",
  "type": "Exercise",
  "number": "2.8.4.1",
  "title": "",
  "body": " Which command will show you the URL(s) of the remote(s) that git knows about?      git remote -v        git remote        git remote -url        git url      You are asking git remote to give you more information.  "
},
{
  "id": "ex-check-remotes-b",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-check-remotes-b",
  "type": "Exercise",
  "number": "2.8.4.2",
  "title": "",
  "body": " Execute the command git remote -v in your terminal. How can you tell from that output that your clone knows about your origin?     The \"origin\" lines have a URL with your GitHub username in them.      There are lines that say \"origin\".      The \"origin\" lines have a URL that points to GitHub.      It is not possible to tell from the output.     Look closely at the \"origin\" URLs.  "
},
{
  "id": "ex-check-remotes-c",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-check-remotes-c",
  "type": "Exercise",
  "number": "2.8.4.3",
  "title": "",
  "body": " How is the origin remote that you see in the output of the command represented in ?     The orange dotted arrow from the clone to the origin repository.      The orange dotted arrow from the origin to the upstream repository.      The orange dotted arrow from the clone to the upstream repository.      The blue \"Clone\" arrow from the origin to the cloned repository.      The origin remote is not represented in the figure.     Which arrow would represent the clone knowing the location of the origin?  "
},
{
  "id": "ex-check-remotes-d",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-check-remotes-d",
  "type": "Exercise",
  "number": "2.8.4.4",
  "title": "",
  "body": " Which step of the basic FOSS workflow requires that your clone know the location of your origin repository?     Pull request      Fork      Clone      Edit      Push     Think about which step of the basic FOSS workflow will need to send information from the clone back to the origin.  "
},
{
  "id": "ex-open-repo-folder",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-open-repo-folder",
  "type": "Exercise",
  "number": "2.8.5.1",
  "title": "",
  "body": " Open the GitKit-FarmData2 folder.  You can do this by going to the \"hamburger\" (≡) menu in the upper left of your development environment window.  Choose File > Open Folder...   Select the GitKit-FarmData2 folder and click OK .  You will see Setting up your Codespace , and then your terminal will show a message from the Kit-tty .  "
},
{
  "id": "ex-kit-tty-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-kit-tty-linux",
  "type": "Exercise",
  "number": "2.8.5.2",
  "title": "",
  "body": " The the output in should contain a message from the Kit-tty . What is the Kit-tty ?     Your personal virtual assistant.      A terminal.      A teletypewriter.      A pet kitten.     The \"Kit-tty\" introduces itself using the line \"😺💻 Meow, Kit-tty here!\" Read the description of the \"Kit-tty\" that follows this line.  "
},
{
  "id": "topic-extra-practice-communities",
  "level": "1",
  "url": "topic-extra-practice-communities.html",
  "type": "Section",
  "number": "2.9",
  "title": "Extra Practice",
  "body": " Extra Practice   There are literally millions of FOSS projects with repositories on GitHub that you can fork and clone and contribute to. The exercises in this section will provide you with a little extra practice forking and cloning repositories.  Choose one of the projects in or search GitHub for one that sounds interesting to you and then complete the exercises below.    Some FOSS Projects that can be used for extra practice with forking and cloning repositories.      Project  Community Mission     OpenMRS    Aims to \"Improve healthcare delivery in resource-constrained environments by coordinating a global community that creates and sustains a robust, scalable, user-driven and open-source medical record platform.\"      Fineract    Aims to provide \"a reliable, robust, and affordable core banking solution for financial institutions offering services to the world’s 3 billion underbanked and unbanked.\"      Sahana Eden    Aims to provide an \"Open Source Humanitarian Platform which can be used to provide solutions for Disaster Management, Development, and Environmental Management sectors.\"      Oppia    Aims to provide \"A free, online learning platform to make quality education accessible for all.\"           Fork the repository for the project into your GitHub space. Give the full URL of your fork.         Thank you.      Please give the full URL of your fork on GitHub.      Make sure you are giving the URL for your fork, not the project's URL. Review for information on how to fork a repository on GitHub.    Pick and order the commands to change to your home directory, clone your fork of the project you chose and confirm that a local copy of the repo was created and check its remotes.    cd ~    git clone <URL>    cd <dir>    ls    git remote -v    git config    copy <URL>    Review for information about how to clone your origin repository.    In your terminal enter the commands from .  Which of the following do you see in the output from entering those commands?    The output from git remote -v contains origin followed by the URL that you entered in     The output from git remote -v contains origin followed by the URL in     The output from git remote -v contains upstream followed by the URL in     The output from git remote -v contains upstream followed by the URL that you entered in     The output from git remote -v contains fork followed by the URL in     The output from git remote -v contains fork followed by the URL that you entered in     The origin URL should be the one from your git clone command.    "
},
{
  "id": "table-foss-projects",
  "level": "2",
  "url": "topic-extra-practice-communities.html#table-foss-projects",
  "type": "Table",
  "number": "2.9.1",
  "title": "Some FOSS Projects that can be used for extra practice with forking and cloning repositories.",
  "body": " Some FOSS Projects that can be used for extra practice with forking and cloning repositories.      Project  Community Mission     OpenMRS    Aims to \"Improve healthcare delivery in resource-constrained environments by coordinating a global community that creates and sustains a robust, scalable, user-driven and open-source medical record platform.\"      Fineract    Aims to provide \"a reliable, robust, and affordable core banking solution for financial institutions offering services to the world’s 3 billion underbanked and unbanked.\"      Sahana Eden    Aims to provide an \"Open Source Humanitarian Platform which can be used to provide solutions for Disaster Management, Development, and Environmental Management sectors.\"      Oppia    Aims to provide \"A free, online learning platform to make quality education accessible for all.\"     "
},
{
  "id": "ex-extra-practice-fork",
  "level": "2",
  "url": "topic-extra-practice-communities.html#ex-extra-practice-fork",
  "type": "Exercise",
  "number": "2.9.1",
  "title": "",
  "body": " Fork the repository for the project into your GitHub space. Give the full URL of your fork.         Thank you.      Please give the full URL of your fork on GitHub.      Make sure you are giving the URL for your fork, not the project's URL. Review for information on how to fork a repository on GitHub.  "
},
{
  "id": "ex-extra-practice-clone-linux",
  "level": "2",
  "url": "topic-extra-practice-communities.html#ex-extra-practice-clone-linux",
  "type": "Exercise",
  "number": "2.9.2",
  "title": "",
  "body": " Pick and order the commands to change to your home directory, clone your fork of the project you chose and confirm that a local copy of the repo was created and check its remotes.    cd ~    git clone <URL>    cd <dir>    ls    git remote -v    git config    copy <URL>    Review for information about how to clone your origin repository.  "
},
{
  "id": "ex-extra-practice-remotes",
  "level": "2",
  "url": "topic-extra-practice-communities.html#ex-extra-practice-remotes",
  "type": "Exercise",
  "number": "2.9.3",
  "title": "",
  "body": " In your terminal enter the commands from .  Which of the following do you see in the output from entering those commands?    The output from git remote -v contains origin followed by the URL that you entered in     The output from git remote -v contains origin followed by the URL in     The output from git remote -v contains upstream followed by the URL in     The output from git remote -v contains upstream followed by the URL that you entered in     The output from git remote -v contains fork followed by the URL in     The output from git remote -v contains fork followed by the URL that you entered in     The origin URL should be the one from your git clone command.  "
},
{
  "id": "topic-git-commands-summary-communities",
  "level": "1",
  "url": "topic-git-commands-summary-communities.html",
  "type": "Section",
  "number": "2.10",
  "title": "Git Command Summary",
  "body": " Git Command Summary   It will take a while for this process and all of the commands to become a natural part of the way you work. To help speed that process, this section provides a chance to collect and review the Git commands that were used in this chapter.      Match the tasks on the right with the appropriate git command listed on the left.     git config   Display Git settings.     git remote -v   List your remote repos.     git clone <URL>   Create a copy of the origin repository in your development environment.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.    "
},
{
  "id": "ex-git-commands-summary-communities",
  "level": "2",
  "url": "topic-git-commands-summary-communities.html#ex-git-commands-summary-communities",
  "type": "Exercise",
  "number": "2.10.1",
  "title": "",
  "body": " Match the tasks on the right with the appropriate git command listed on the left.     git config   Display Git settings.     git remote -v   List your remote repos.     git clone <URL>   Create a copy of the origin repository in your development environment.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.  "
},
{
  "id": "topic-gitkit-feedback-communities",
  "level": "1",
  "url": "topic-gitkit-feedback-communities.html",
  "type": "Section",
  "number": "2.11",
  "title": "GitKit Feedback",
  "body": " GitKit Feedback   To help us improve this chapter for future semesters please consider clicking this link to complete a short survey which should take 2-3 minutes to complete.  Thank you for your time and assistance, it is greatly appreciated!    "
},
{
  "id": "topic-exploring-your-local-repository",
  "level": "1",
  "url": "topic-exploring-your-local-repository.html",
  "type": "Section",
  "number": "3.1",
  "title": "Exploring Your Local Repository",
  "body": " Exploring Your Local Repository   Like in the previous chapter, you will be working within the development environment for this exercise.   Current State:    shows where you should be based upon the exercises in the previous chapter. You will have forked the upstream FarmData2 repository into your own GitHub account. You will then have cloned your fork into a local repository in the development environment. Your local files at this point are a copy that reflects the current state of the upstream main branch.  Let's explore this state just a little before making the changes that address the issue that you have claimed.    Fork, Clone and Local Files.   Cloud image of fork, clone, and local files.       Restarting the Development Environment        Click here to open your development environment . Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use.\" and your browser window will look similar to the following:  The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.       git log   The git log command provides a way to see information about the history of the project. It will display information about the most recent commits that have been made to the repository. By default, git log displays information about the 10 most recent commits. You can append a -2 (or -5) to show only the most recent 2 (or 5) commits.      Which of the following commands will provide the four most recent commits?      git log     This will provide information about the 10 most recent commits, not just the first four.       git log 4     This is not the proper format, a symbol is missing before the 4.       git log -4     Correct!       git log +4     The symbol before the 4 is incorrect.     Refer back to the beginning of this subsection for specifics about the git log command.   Ensure that you are in your cloned repo (i.e. the GitKit-FarmData2 directory is your working directory). Then use the git log command from to display the information about the 4 most recent commits. (If you don't see all four recent commits, press \"return\" or \"spacebar\" to see more; when you are done, press \"q\" to quit.)  A line that begins with \"commit\" appears at the start of the information about each commit. That line also contains a long string of numbers and letters. That string is called the SHA (secure hashing algorithm) hash. It is a string of digits (0-9) and letters (a-f) known as a hexadecimal number and it provides a unique identifier for the commit. Following the SHA hash is information about the author, the date the commit was made and the commit message that was used to describe the changes.  Paste the output of the git log command you typed in the space below.      Reviewing the git log Output   Use the output from the to answer the following questions about the project history. Note, if you have started this exercise late, new commits may have been added.      What is the SHA of the most recent commit by IrisSC?     f7330b62bf421c4a87830fee758105a790f6b6ba    That commit was not made by IrisSC.      d622e8d6d71e27890c73e2428e6dcf9d44ca606e    That commit was not made by IrisSC.      80b4408aa0df6dadc4e5e2c310a5e5cbbc0b9d35    Correct!      73feb3808ae8978deaddfeb9eb14ef6d99457d18    That commit was made by IrisSC, but it is not her most recent commit.     Look at the dates of each commit. The SHA code appears above the author of the commit and date the commit was made.   What is the date of the most recent commit to the repository?     Oct 11 2021    There is a more recent commit.      None of those listed.    Correct! The most recent commit is always shown first in the list.      Oct 8 2021    There is a more recent commit.      Oct 5, 2021    There is a more recent commit.     To see the most recent commit you can scroll up in the terminal window or type the log command again.   Who authored a commit on October 11, 2021?     Batese2001    Correct! Bates2001 authored a commit on October 11, 2021.      kit    kit did not author a commit on October 11, 2021.      IrisSC    IrisSC did not author a commit on October 11, 2021.      Grant Braught    Grant Braught did not author a commit on October 11, 2021.     The author's name will appear below the SHA and above the date of the commit.   What is the purpose of the most recent commit by Elad Sheskin (username: shes-dev)?     Updated comment (#288)    Correct! shes-dev made this commit on October 5, 2021.      chore: install kit    This commit was not made by shes-dev.      Reorder Seeding Input (#281)    This commit was not made by shes-dev.      Summary Table Timing and No Log Messages (#289)    This commit was not made by shes-dev.      No Default Label For Drop Down Component (#293)    This commit was not made by shes-dev.     This commit is older than the others, try a git log command that shows a few more commits.      git status   The git status command provides the current status of your local repository. Use the git status command to see the current status of your local GitKit-FarmData2 repository.      What part of the output tells you which branch is currently active in your repository?     The branch name is displayed in the first line after \"On branch\".    Correct! The first line specifies the current branch.      The branch name is displayed at the end of the second line. It is \"origin\/main\".    The second line specifies the origin branch not the active branch.      The branch name is not displayed in the output from this git command.    Look again, the active branch is listed.      The branch name is displayed at the end of the last line. It is \"working tree\".    The last line indicates if there are changes to commit.     Look at the first line of the output from the git status command.   Your output should contain the text “Your branch is up to date with 'origin\/main'.” What do you think it means that your branch is “up to date”?     It means that your branch contains all of the commits in the origin main branch.    Correct!      It means that the origin main branch contains all of the commits in your local branch.    Think about what is being compared in that statement.      It means that your branch contains all of the issues in the origin main branch.    Issues are not part of a branch.      It means that the origin main branch contains all of the issues in your branch.    Issues are not part of a branch.     Think about what could be \"out of date\". What differences might there be between the origin main and your branch?   Your output should contain the text “nothing to commit, working tree clean.” What do you think it means that you have “nothing to commit.” Hint: when would you have something to commit? This is the opposite of that!     It means that you haven't made any changes.    Correct!      It means that you haven't created any issues.    Issues aren't part of a branch.      It means you haven't made any branches.    Branches aren't committed.      It means the origin main branch doesn't have any changes.    This statement is referring to your local branch, not origin main .     Think about what the next step might be after you have cloned the repo. What would you want to do next?      In the next section you will create a feature branch.   "
},
{
  "id": "topic-exploring-your-local-repository-2-2",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#topic-exploring-your-local-repository-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Current State: "
},
{
  "id": "fig-fork-and-clone-local",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#fig-fork-and-clone-local",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " Fork, Clone and Local Files.   Cloud image of fork, clone, and local files.   "
},
{
  "id": "ex-restarting-kitclient-for-upstreaming",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#ex-restarting-kitclient-for-upstreaming",
  "type": "Exercise",
  "number": "3.1.1.1",
  "title": "",
  "body": "Click here to open your development environment . Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use.\" and your browser window will look similar to the following:  The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.   "
},
{
  "id": "ex-understanding-project-history-new",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#ex-understanding-project-history-new",
  "type": "Exercise",
  "number": "3.1.2.1",
  "title": "",
  "body": " Which of the following commands will provide the four most recent commits?      git log     This will provide information about the 10 most recent commits, not just the first four.       git log 4     This is not the proper format, a symbol is missing before the 4.       git log -4     Correct!       git log +4     The symbol before the 4 is incorrect.     Refer back to the beginning of this subsection for specifics about the git log command.   Ensure that you are in your cloned repo (i.e. the GitKit-FarmData2 directory is your working directory). Then use the git log command from to display the information about the 4 most recent commits. (If you don't see all four recent commits, press \"return\" or \"spacebar\" to see more; when you are done, press \"q\" to quit.)  A line that begins with \"commit\" appears at the start of the information about each commit. That line also contains a long string of numbers and letters. That string is called the SHA (secure hashing algorithm) hash. It is a string of digits (0-9) and letters (a-f) known as a hexadecimal number and it provides a unique identifier for the commit. Following the SHA hash is information about the author, the date the commit was made and the commit message that was used to describe the changes.  Paste the output of the git log command you typed in the space below.  "
},
{
  "id": "ex-understanding-project-history",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#ex-understanding-project-history",
  "type": "Exercise",
  "number": "3.1.3.1",
  "title": "",
  "body": " What is the SHA of the most recent commit by IrisSC?     f7330b62bf421c4a87830fee758105a790f6b6ba    That commit was not made by IrisSC.      d622e8d6d71e27890c73e2428e6dcf9d44ca606e    That commit was not made by IrisSC.      80b4408aa0df6dadc4e5e2c310a5e5cbbc0b9d35    Correct!      73feb3808ae8978deaddfeb9eb14ef6d99457d18    That commit was made by IrisSC, but it is not her most recent commit.     Look at the dates of each commit. The SHA code appears above the author of the commit and date the commit was made.   What is the date of the most recent commit to the repository?     Oct 11 2021    There is a more recent commit.      None of those listed.    Correct! The most recent commit is always shown first in the list.      Oct 8 2021    There is a more recent commit.      Oct 5, 2021    There is a more recent commit.     To see the most recent commit you can scroll up in the terminal window or type the log command again.   Who authored a commit on October 11, 2021?     Batese2001    Correct! Bates2001 authored a commit on October 11, 2021.      kit    kit did not author a commit on October 11, 2021.      IrisSC    IrisSC did not author a commit on October 11, 2021.      Grant Braught    Grant Braught did not author a commit on October 11, 2021.     The author's name will appear below the SHA and above the date of the commit.   What is the purpose of the most recent commit by Elad Sheskin (username: shes-dev)?     Updated comment (#288)    Correct! shes-dev made this commit on October 5, 2021.      chore: install kit    This commit was not made by shes-dev.      Reorder Seeding Input (#281)    This commit was not made by shes-dev.      Summary Table Timing and No Log Messages (#289)    This commit was not made by shes-dev.      No Default Label For Drop Down Component (#293)    This commit was not made by shes-dev.     This commit is older than the others, try a git log command that shows a few more commits.  "
},
{
  "id": "ex-git-status-command",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#ex-git-status-command",
  "type": "Exercise",
  "number": "3.1.4.1",
  "title": "",
  "body": " What part of the output tells you which branch is currently active in your repository?     The branch name is displayed in the first line after \"On branch\".    Correct! The first line specifies the current branch.      The branch name is displayed at the end of the second line. It is \"origin\/main\".    The second line specifies the origin branch not the active branch.      The branch name is not displayed in the output from this git command.    Look again, the active branch is listed.      The branch name is displayed at the end of the last line. It is \"working tree\".    The last line indicates if there are changes to commit.     Look at the first line of the output from the git status command.   Your output should contain the text “Your branch is up to date with 'origin\/main'.” What do you think it means that your branch is “up to date”?     It means that your branch contains all of the commits in the origin main branch.    Correct!      It means that the origin main branch contains all of the commits in your local branch.    Think about what is being compared in that statement.      It means that your branch contains all of the issues in the origin main branch.    Issues are not part of a branch.      It means that the origin main branch contains all of the issues in your branch.    Issues are not part of a branch.     Think about what could be \"out of date\". What differences might there be between the origin main and your branch?   Your output should contain the text “nothing to commit, working tree clean.” What do you think it means that you have “nothing to commit.” Hint: when would you have something to commit? This is the opposite of that!     It means that you haven't made any changes.    Correct!      It means that you haven't created any issues.    Issues aren't part of a branch.      It means you haven't made any branches.    Branches aren't committed.      It means the origin main branch doesn't have any changes.    This statement is referring to your local branch, not origin main .     Think about what the next step might be after you have cloned the repo. What would you want to do next?  "
},
{
  "id": "topic-creating-a-feature-branch",
  "level": "1",
  "url": "topic-creating-a-feature-branch.html",
  "type": "Section",
  "number": "3.2",
  "title": "Creating a Feature Branch",
  "body": " Creating a Feature Branch   When you set out to make changes to the project you will do so by working on a feature branch. The exercises in this section will walk you through the process of creating a feature branch on which you will fix the issue that you claimed in .   illustrates this process. The feature branch that you will create is shown in orange.    Create Feature Branch.   Cloud image of origin, upstream, and local branches.         The git branch <name> command creates a new branch with the given name . When creating a branch, you should give it a short but descriptive name (e.g. FixTypoInReadme ). Note: name may not have spaces, so you can use - (dashes) or CammelCaseText to divide words in your branch names. Remember not to include the < > when writing your own command.   If you want to create a new feature branch named fixTypoInName , which command should you use?      git branch fixTypoInName     Correct!       git branch <fixTypoInName>     The command should not contain < >.       branch fixTypoInName     The command is missing git .       git fixTypoInName     The command is missing branch .     Look back at the format of the command in the previous description.   Adapt the command from to create a branch for the issue you claimed. Type that command now.  What output was produced when you typed the git branch command?     No output was provided.    Correct!      It said the branch was created.    Look at the terminal window again.      It gave an error statement.    Your branch was not created. Make sure your branch name does not contain spaces and < >      The current branch is <branch name>.    Look at the terminal window again.     Look back at the format of the command and make sure you type it correctly.    The git branch command without the branch name lists all branches.   Type git branch and look at the output produced. Which of the following do you see listed?      main     Correct!       name which is the name of your feature branch    Correct!       git      git is a command and should not be your branch name       <name> which is the name of your feature branch    The branch name should not have < >.     If you don't see your branch name it means it was not created. Try creating it again using the format of the command from .   By looking at the output provided by git branch how can you tell which is the active branch?     It will have an * before the branch name.    Correct!      The branch name will appear in green.    Correct!      The branch name will appear in italics.    Look at the output provided in the terminal window again.      The branch name will appear in bold.    Look at the output provided in the terminal window again.     There are two ways the active branch is indicated.   Refer back to to see the process you just completed.   "
},
{
  "id": "fig-create-feature-branch",
  "level": "2",
  "url": "topic-creating-a-feature-branch.html#fig-create-feature-branch",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Create Feature Branch.   Cloud image of origin, upstream, and local branches.   "
},
{
  "id": "ex-creating-a-branch",
  "level": "2",
  "url": "topic-creating-a-feature-branch.html#ex-creating-a-branch",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": " The git branch <name> command creates a new branch with the given name . When creating a branch, you should give it a short but descriptive name (e.g. FixTypoInReadme ). Note: name may not have spaces, so you can use - (dashes) or CammelCaseText to divide words in your branch names. Remember not to include the < > when writing your own command.   If you want to create a new feature branch named fixTypoInName , which command should you use?      git branch fixTypoInName     Correct!       git branch <fixTypoInName>     The command should not contain < >.       branch fixTypoInName     The command is missing git .       git fixTypoInName     The command is missing branch .     Look back at the format of the command in the previous description.   Adapt the command from to create a branch for the issue you claimed. Type that command now.  What output was produced when you typed the git branch command?     No output was provided.    Correct!      It said the branch was created.    Look at the terminal window again.      It gave an error statement.    Your branch was not created. Make sure your branch name does not contain spaces and < >      The current branch is <branch name>.    Look at the terminal window again.     Look back at the format of the command and make sure you type it correctly.  "
},
{
  "id": "ex-checking-a-branch",
  "level": "2",
  "url": "topic-creating-a-feature-branch.html#ex-checking-a-branch",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " The git branch command without the branch name lists all branches.   Type git branch and look at the output produced. Which of the following do you see listed?      main     Correct!       name which is the name of your feature branch    Correct!       git      git is a command and should not be your branch name       <name> which is the name of your feature branch    The branch name should not have < >.     If you don't see your branch name it means it was not created. Try creating it again using the format of the command from .   By looking at the output provided by git branch how can you tell which is the active branch?     It will have an * before the branch name.    Correct!      The branch name will appear in green.    Correct!      The branch name will appear in italics.    Look at the output provided in the terminal window again.      The branch name will appear in bold.    Look at the output provided in the terminal window again.     There are two ways the active branch is indicated.  "
},
{
  "id": "topic-switching-branches",
  "level": "1",
  "url": "topic-switching-branches.html",
  "type": "Section",
  "number": "3.3",
  "title": "Switching Branches",
  "body": " Switching Branches   In the previous section you learned how to create a branch. In this section you will learn more about why branching is important and how to switch between existing branches.  Figure illustrates this idea by showing what what will happen when you switch to your feature branch and your Local Files have not been modified since the last commit on the main branch (drawn in green).    Switch to Feature Branch.   Cloud image of origin, upstream, and local branches (including new feature branch).         As you saw in , the git branch <name> command creates a branch (among other uses), but it does not change your active branch. The git switch <name> command switches (i.e. changes) the active branch.   Type git switch <name> to change your active branch to the new feature branch that you created in the previous section. What output is produced?     Switched to branch '<name>'    Correct!      Switched to branch 'main'    You were on main prior to switching branches.      error: Your local changes to the following files would be overwritten by checkout: ...  Aborting    You should not have made any changes so far.      fatal: invlalid reference: <name>    You probably typed the branch name incorrectly. Run git branch again to see the name of the branch you created.     Make sure you don't include < > in your git switch <name> command.   Which of the following commands could be used to confirm that your feature branch is now the active branch?      git branch     Correct!       git status     Correct!       git log      git log will show the commit history, it will not show the active branch       git branch <name>     When git branch ends with a name it creates a new branch, it does not show what is active.     There are two commands that will provide information about the active branch.   Which of the following commands could be used to make main the active branch?      git switch main     Correct!       git branch main     This will try to create a new branch named main .       git branch      git branch will show all the branches       git status      git status will show the active branch and information about changes     Refer back to how you made your feature branch the active branch.   Type the command from and verify that main is the active branch.   Assuming you are on the main branch, drag the steps that will make your feature branch the active branch and verify you are on your feature branch. Some steps may not be used.     git switch      git switch <name>      git branch <name>      git branch      git switch main     Think about how you make a branch active and then verify it.     Use the commands from to make your feature branch the active branch and verify your active branch.   "
},
{
  "id": "fig-switch-to-feature-branch",
  "level": "2",
  "url": "topic-switching-branches.html#fig-switch-to-feature-branch",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " Switch to Feature Branch.   Cloud image of origin, upstream, and local branches (including new feature branch).   "
},
{
  "id": "ex-switching-branches",
  "level": "2",
  "url": "topic-switching-branches.html#ex-switching-branches",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": " As you saw in , the git branch <name> command creates a branch (among other uses), but it does not change your active branch. The git switch <name> command switches (i.e. changes) the active branch.   Type git switch <name> to change your active branch to the new feature branch that you created in the previous section. What output is produced?     Switched to branch '<name>'    Correct!      Switched to branch 'main'    You were on main prior to switching branches.      error: Your local changes to the following files would be overwritten by checkout: ...  Aborting    You should not have made any changes so far.      fatal: invlalid reference: <name>    You probably typed the branch name incorrectly. Run git branch again to see the name of the branch you created.     Make sure you don't include < > in your git switch <name> command.   Which of the following commands could be used to confirm that your feature branch is now the active branch?      git branch     Correct!       git status     Correct!       git log      git log will show the commit history, it will not show the active branch       git branch <name>     When git branch ends with a name it creates a new branch, it does not show what is active.     There are two commands that will provide information about the active branch.   Which of the following commands could be used to make main the active branch?      git switch main     Correct!       git branch main     This will try to create a new branch named main .       git branch      git branch will show all the branches       git status      git status will show the active branch and information about changes     Refer back to how you made your feature branch the active branch.  "
},
{
  "id": "ex-switching-branches-git-branch",
  "level": "2",
  "url": "topic-switching-branches.html#ex-switching-branches-git-branch",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " Assuming you are on the main branch, drag the steps that will make your feature branch the active branch and verify you are on your feature branch. Some steps may not be used.     git switch      git switch <name>      git branch <name>      git branch      git switch main     Think about how you make a branch active and then verify it.  "
},
{
  "id": "topic-editing-local-files",
  "level": "1",
  "url": "topic-editing-local-files.html",
  "type": "Section",
  "number": "3.4",
  "title": "Editing Local Files",
  "body": " Editing Local Files   In the last two sections you created a feature branch and switched to that branch. In this section you will edit your local files to fix the issue that you claimed in the issue tracker. Confirm you are on your feature branch now.      In order to make the changes to the appropriate local file, you will need to review the issue that you claimed.  Provide the URL to the issue that you claimed in the issue tracker.         Thank you.      Make sure you have pasted the complete URL starting with https and ending with the issue number.       Read the issue that you claimed. To make the requested change you will need to open the file. Click <Code> to see the files in the repository. Use the issue to locate the file. Once you have found it, click on it to open it.   In which file will you be making changes to address your issue? Hint: Look at the text of your issue in the issue tracker. Be careful to use the same capitalization as given in the issue.         Thank you.      Double check the spelling of the file name, that the name is ALL CAPS, the .md at the end of the file name is included and in lower case.        illustrates the current situation where your Local Files have been modified. In the Local Files in your feature branch were drawn in green. This reflected that they were, at that time, an exact copy of the last commit on the main branch, which was also drawn in green. Here Local Files are drawn in blue to indicate that they have been changed as compared to the final commit in the main branch, which is still green.    Editing Local Files on a Feature Branch.   Editing local files on a feature branch.      The git status command can now be used to check that your changes have been made. Run the git status command now.  If you see the message \"nothing to commit, working tree clean\", it means that your edits in the previous exercise were not saved. Go back and save your edits and then issue the git status command again before answering the questions below.   Paste the output of the git status command below.   How many files are not staged?     0    Perhaps you didn't save your change. Try editing the file again and make sure you save it.      1    Correct! The file you changed has been modified but not staged yet.      2    Did you change more than 1 file by accident? Verify that you only changed the file specified in your issue.      Cannot be determined from the output provided by the git status command.    The git status command will show you all unstaged and staged files.     Not staged means a file has been modified but not added to the commit.   How many files are added to the commit?     0    Correct! You have not added any files to the stage yet.      1    Unless you already issued the git add command you shouldn't have any files ready to be committed.      2    Unless you already issued the git add command you shouldn't have any files ready to be committed.      Cannot be determined from the output provided by the git status command.    The git status command will show you all unstaged and staged files.     If a file has been modified but not added it will not be part of the commit.    The git diff command provides another way to examine or confirm the changes you have been making. Note diff is just short for difference , and is called this because it is used to show differences. By default the git diff command will show you any changes that have been made to your local files that have not yet been staged. Run the git diff command now.  How is the change that you made indicated in the output from git diff ?     The new text is in red, the old text is in green.    Look again to see what color your change appears in.      The new text is in green, the old text is in red.    Correct! The original text is in red, your changes are in green.      Only the new text appears.    Look again, you should see the original text as well.      The old text appears with a strike-through line across it.    Strike-through is not part of the feedback git commands can provide.     Look at the feedback again and look for your change. Do you also see the original text?    "
},
{
  "id": "ex-claimed-issue-url",
  "level": "2",
  "url": "topic-editing-local-files.html#ex-claimed-issue-url",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": " In order to make the changes to the appropriate local file, you will need to review the issue that you claimed.  Provide the URL to the issue that you claimed in the issue tracker.         Thank you.      Make sure you have pasted the complete URL starting with https and ending with the issue number.     "
},
{
  "id": "ex-locate-claimed-issue",
  "level": "2",
  "url": "topic-editing-local-files.html#ex-locate-claimed-issue",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": " Read the issue that you claimed. To make the requested change you will need to open the file. Click <Code> to see the files in the repository. Use the issue to locate the file. Once you have found it, click on it to open it.   In which file will you be making changes to address your issue? Hint: Look at the text of your issue in the issue tracker. Be careful to use the same capitalization as given in the issue.         Thank you.      Double check the spelling of the file name, that the name is ALL CAPS, the .md at the end of the file name is included and in lower case.     "
},
{
  "id": "fig-edit-local-files-on-feature-branch",
  "level": "2",
  "url": "topic-editing-local-files.html#fig-edit-local-files-on-feature-branch",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " Editing Local Files on a Feature Branch.   Editing local files on a feature branch.   "
},
{
  "id": "ex-verify-changes",
  "level": "2",
  "url": "topic-editing-local-files.html#ex-verify-changes",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": " The git status command can now be used to check that your changes have been made. Run the git status command now.  If you see the message \"nothing to commit, working tree clean\", it means that your edits in the previous exercise were not saved. Go back and save your edits and then issue the git status command again before answering the questions below.   Paste the output of the git status command below.   How many files are not staged?     0    Perhaps you didn't save your change. Try editing the file again and make sure you save it.      1    Correct! The file you changed has been modified but not staged yet.      2    Did you change more than 1 file by accident? Verify that you only changed the file specified in your issue.      Cannot be determined from the output provided by the git status command.    The git status command will show you all unstaged and staged files.     Not staged means a file has been modified but not added to the commit.   How many files are added to the commit?     0    Correct! You have not added any files to the stage yet.      1    Unless you already issued the git add command you shouldn't have any files ready to be committed.      2    Unless you already issued the git add command you shouldn't have any files ready to be committed.      Cannot be determined from the output provided by the git status command.    The git status command will show you all unstaged and staged files.     If a file has been modified but not added it will not be part of the commit.  "
},
{
  "id": "ex-verify-changes-with-diff",
  "level": "2",
  "url": "topic-editing-local-files.html#ex-verify-changes-with-diff",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": " The git diff command provides another way to examine or confirm the changes you have been making. Note diff is just short for difference , and is called this because it is used to show differences. By default the git diff command will show you any changes that have been made to your local files that have not yet been staged. Run the git diff command now.  How is the change that you made indicated in the output from git diff ?     The new text is in red, the old text is in green.    Look again to see what color your change appears in.      The new text is in green, the old text is in red.    Correct! The original text is in red, your changes are in green.      Only the new text appears.    Look again, you should see the original text as well.      The old text appears with a strike-through line across it.    Strike-through is not part of the feedback git commands can provide.     Look at the feedback again and look for your change. Do you also see the original text?  "
},
{
  "id": "topic-staging-changes",
  "level": "1",
  "url": "topic-staging-changes.html",
  "type": "Section",
  "number": "3.5",
  "title": "Staging Changes",
  "body": " Staging Changes   As you saw in the previous section, you now have modifications to your local files that have not been staged. The process of staging changes (i.e. adding the files to the stage) is illustrated in . Recall from that the blue dot in Local Files represents the changes you made. In , those changes are staged and will be made into a commit that is added to your feature branch in the next section.     Staging changes.   Staging Changes.        The exercises in this section will walk you through staging the changes you made to your Local Files .    The git stage <file> command adds the indicated file to the stage, preparing it to become a part of the next commit. Use the git stage <file> command now to stage the file that you edited.   Paste the output of the git stage command here.   Now run the git status command again. Compare your output in to the output in .  How many files are not staged?     0    Correct! After issuing the git stage (or git add ) command the file will be staged.      1    Once you have issued the git stage command it show that the file is ready to be committed.      2    Did you change more than 1 file by accident? Verify that you only changed the file specified in your issue.      Cannot be determined from the output provided by the git status command.    The git status command will show you all unstaged and staged files.     Staged means a file has been modified and added to the commit.   How many files are listed as ready to be committed?     0    If you issued the git stage command properly the file you changed should appear as ready to be committed.      1    Correct! After issuing the git stage (or git add ) command the file will be staged.      2    Did you change more than 1 file by accident? Verify that you only changed the file specified in your issue.      Cannot be determined from the output provided by the git status command.    The git status command will show you all unstaged and staged files.     Staged means a file has been modified and added to the commit.    Run the git diff command again. What output is produced?     No output is produced.    Correct! There are no differences because your changes were staged.      It shows the file name that I changed.    If you are seeing the file name you changed it means either you made additional changes after the git stage command was done or your git stage command did not work properly.      It shows the code I added in green.    If you are seeing code changes it means either you made additional changes after the git stage command was done or your git stage command did not work properly.      It shows the code I deleted in red.    If you are seeing code changes it means either you made additional changes after the git stage command was done or your git stage command did not work properly.     The git diff command will only show the changes that have yet to be staged.     The git diff --staged command will show you the differences between the staged changes and the most recent commit. Try this command now.  Note that git also has a git add command that is equivalent to git stage . So, you can add files to the stage using either git stage or git add . These activities will use git stage because it seems more descriptive of what is happening. However, you are likely to see git add used in other resources, so it is worth knowing that they are equivalent.   "
},
{
  "id": "fig-staging-changes",
  "level": "2",
  "url": "topic-staging-changes.html#fig-staging-changes",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " Staging changes.   Staging Changes.   "
},
{
  "id": "ex-staging-changes",
  "level": "2",
  "url": "topic-staging-changes.html#ex-staging-changes",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": " The git stage <file> command adds the indicated file to the stage, preparing it to become a part of the next commit. Use the git stage <file> command now to stage the file that you edited.   Paste the output of the git stage command here.   Now run the git status command again. Compare your output in to the output in .  How many files are not staged?     0    Correct! After issuing the git stage (or git add ) command the file will be staged.      1    Once you have issued the git stage command it show that the file is ready to be committed.      2    Did you change more than 1 file by accident? Verify that you only changed the file specified in your issue.      Cannot be determined from the output provided by the git status command.    The git status command will show you all unstaged and staged files.     Staged means a file has been modified and added to the commit.   How many files are listed as ready to be committed?     0    If you issued the git stage command properly the file you changed should appear as ready to be committed.      1    Correct! After issuing the git stage (or git add ) command the file will be staged.      2    Did you change more than 1 file by accident? Verify that you only changed the file specified in your issue.      Cannot be determined from the output provided by the git status command.    The git status command will show you all unstaged and staged files.     Staged means a file has been modified and added to the commit.  "
},
{
  "id": "ex-staging-changes-diff",
  "level": "2",
  "url": "topic-staging-changes.html#ex-staging-changes-diff",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": " Run the git diff command again. What output is produced?     No output is produced.    Correct! There are no differences because your changes were staged.      It shows the file name that I changed.    If you are seeing the file name you changed it means either you made additional changes after the git stage command was done or your git stage command did not work properly.      It shows the code I added in green.    If you are seeing code changes it means either you made additional changes after the git stage command was done or your git stage command did not work properly.      It shows the code I deleted in red.    If you are seeing code changes it means either you made additional changes after the git stage command was done or your git stage command did not work properly.     The git diff command will only show the changes that have yet to be staged.  "
},
{
  "id": "topic-committing-to-your-local-repository",
  "level": "1",
  "url": "topic-committing-to-your-local-repository.html",
  "type": "Section",
  "number": "3.6",
  "title": "Committing to Your Local Repository",
  "body": " Committing to Your Local Repository   In this section you will do the work necessary to commit the changes made to your Local Files to your local repository. The process of committing changes is illustrated in .     Committing changes.   Committing Changes.        As you saw earlier when looking at the output of git log , each commit has a commit message that briefly describes the changes that are contained in the commit. These messages should be concise but meaningful without requiring the reader to refer to the ticket in the issue tracker. A future reader of the git log output should be able to obtain an idea of the changes you have made and why you made them by reading your commit messages.  For each of the following issues, order the given commit messages from best (listed first) to worst (listed last).   Issue: The documentation says “bug” instead of “bugs” where plural is needed.    Pluralize bug (i.e. bugs) for clarity    Fix issue #123    Fix typo    Commit messages should be as specific as possible regarding the changes made. Something like \"fix typo\" is too generic as it can apply to lots of different changes.   Issue: The harvesting log should be able to track insect presence.    Add tracking for insects in harvesting logs    Insect tracking added    Extend harvest logs    Commit messages should be as specific as possible regarding the changes made. Which of the messages provides information about what is added and where?    The git commit -m \"<message>\" command commits all of the staged files to the currently active branch with the specified commit message.  Write a git commit command for the change you made in the space below. Be sure to include a meaningful message.         Thank you. Your command is in the proper format, please make sure the commit message is meaningful.      Double check the format of your command.       Use the git commit command you wrote in to commit your staged changes to your local repository with a meaningful commit message.  Look at the output produced.     It shows the name of the file changed in [].    The first part of the first line is not the file name, take another look at the output.      It shows the name of the feature branch that contains the change in [].    The first part of the first line is the feature branch name.      It shows the SHA code of the commit in [].    The second part of the first line is the SHA code of the commit.      It shows the commit message.    The last part of the first line is the commit message.      It shows the number of files changed.    The first part of the second line is the number of files changed.      It shows the number of lines inserted.    The second part of the second line is the number of lines inserted.      It shows every line that was inserted and\/or deleted.    The output should not show the individual line changes, rather a summary of the changes.     There should be two lines of output. The first will provide 3 different pieces of information. The second provides what additional information?    Now use the git status command again. Compare your output to the output in . What two changes have occurred that reflect that your changes have been staged?     No files appear listed as modified in red (meaning they are unstaged).      No files appear listed as modified in green (meaning they are staged).      The output states \"nothing to commit\".      All of the above.     How do you know your changes have been committed?     Option 1    Feedback 1      Option 2    Feedback 2      Option 3    Feedback 3      Option 4    Feedback 4     Hint here   Use the git log command to show the 3 most recent commits to your branch. Refer back to your output from .     Option 1    Feedback 1      Option 2    Feedback 2      Option 3    Feedback 3      Option 4    Feedback 4     Hint here   Switch to your main branch. What command did you use?      git status      git status shows what files have been changed and staged.       git stage main      git stage main is not a proper command.       git branch main      git branch main would try to create a new branch named main .       git switch main     Correct!     To change the active branch you need to switch to it.   The output of the git log command now shows the information about the commit you made.   What branch are you on, the main branch our your feature branch? In which branch did you make your changes?   The commit is not shown in the git log output because:     You are on the main branch and the commit is on the feature branch.    Correct!      You are on the feature branch and the commit is on the main branch.    You should be on the main branch.      The git status command should be used to show the commits.    The git status command is used to see what files have been changed and staged.      It only shows the first commit made, not every commit.    The git log command will show multiple commits with the most recent appearing first.     Commits are specific to branches. You must be on the proper branch to see a commit.    "
},
{
  "id": "fig-committing-changes",
  "level": "2",
  "url": "topic-committing-to-your-local-repository.html#fig-committing-changes",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " Committing changes.   Committing Changes.   "
},
{
  "id": "ex-meaningful-commit-messages",
  "level": "2",
  "url": "topic-committing-to-your-local-repository.html#ex-meaningful-commit-messages",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "",
  "body": " As you saw earlier when looking at the output of git log , each commit has a commit message that briefly describes the changes that are contained in the commit. These messages should be concise but meaningful without requiring the reader to refer to the ticket in the issue tracker. A future reader of the git log output should be able to obtain an idea of the changes you have made and why you made them by reading your commit messages.  For each of the following issues, order the given commit messages from best (listed first) to worst (listed last).   Issue: The documentation says “bug” instead of “bugs” where plural is needed.    Pluralize bug (i.e. bugs) for clarity    Fix issue #123    Fix typo    Commit messages should be as specific as possible regarding the changes made. Something like \"fix typo\" is too generic as it can apply to lots of different changes.   Issue: The harvesting log should be able to track insect presence.    Add tracking for insects in harvesting logs    Insect tracking added    Extend harvest logs    Commit messages should be as specific as possible regarding the changes made. Which of the messages provides information about what is added and where?  "
},
{
  "id": "ex-committing-changes",
  "level": "2",
  "url": "topic-committing-to-your-local-repository.html#ex-committing-changes",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "",
  "body": " The git commit -m \"<message>\" command commits all of the staged files to the currently active branch with the specified commit message.  Write a git commit command for the change you made in the space below. Be sure to include a meaningful message.         Thank you. Your command is in the proper format, please make sure the commit message is meaningful.      Double check the format of your command.     "
},
{
  "id": "ex-committing-changes-new-a",
  "level": "2",
  "url": "topic-committing-to-your-local-repository.html#ex-committing-changes-new-a",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "",
  "body": " Use the git commit command you wrote in to commit your staged changes to your local repository with a meaningful commit message.  Look at the output produced.     It shows the name of the file changed in [].    The first part of the first line is not the file name, take another look at the output.      It shows the name of the feature branch that contains the change in [].    The first part of the first line is the feature branch name.      It shows the SHA code of the commit in [].    The second part of the first line is the SHA code of the commit.      It shows the commit message.    The last part of the first line is the commit message.      It shows the number of files changed.    The first part of the second line is the number of files changed.      It shows the number of lines inserted.    The second part of the second line is the number of lines inserted.      It shows every line that was inserted and\/or deleted.    The output should not show the individual line changes, rather a summary of the changes.     There should be two lines of output. The first will provide 3 different pieces of information. The second provides what additional information?  "
},
{
  "id": "ex-committing-changes-new-ex",
  "level": "2",
  "url": "topic-committing-to-your-local-repository.html#ex-committing-changes-new-ex",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "",
  "body": " Now use the git status command again. Compare your output to the output in . What two changes have occurred that reflect that your changes have been staged?     No files appear listed as modified in red (meaning they are unstaged).      No files appear listed as modified in green (meaning they are staged).      The output states \"nothing to commit\".      All of the above.     How do you know your changes have been committed?     Option 1    Feedback 1      Option 2    Feedback 2      Option 3    Feedback 3      Option 4    Feedback 4     Hint here   Use the git log command to show the 3 most recent commits to your branch. Refer back to your output from .     Option 1    Feedback 1      Option 2    Feedback 2      Option 3    Feedback 3      Option 4    Feedback 4     Hint here   Switch to your main branch. What command did you use?      git status      git status shows what files have been changed and staged.       git stage main      git stage main is not a proper command.       git branch main      git branch main would try to create a new branch named main .       git switch main     Correct!     To change the active branch you need to switch to it.   The output of the git log command now shows the information about the commit you made.   What branch are you on, the main branch our your feature branch? In which branch did you make your changes?   The commit is not shown in the git log output because:     You are on the main branch and the commit is on the feature branch.    Correct!      You are on the feature branch and the commit is on the main branch.    You should be on the main branch.      The git status command should be used to show the commits.    The git status command is used to see what files have been changed and staged.      It only shows the first commit made, not every commit.    The git log command will show multiple commits with the most recent appearing first.     Commits are specific to branches. You must be on the proper branch to see a commit.  "
},
{
  "id": "topic-pushing-a-branch-to-your-origin",
  "level": "1",
  "url": "topic-pushing-a-branch-to-your-origin.html",
  "type": "Section",
  "number": "3.7",
  "title": "Pushing a Branch to Your Origin",
  "body": " Pushing a Branch to Your Origin   You have made the changes necessary to address the issue you were assigned, and you are now ready to upstream those changes. In order to do that, the first step is to get the changes you have made into GitHub so that the upstream maintainers can be told about them.     As shown in , this is done by pushing your feature branch to your origin repository. More generally, pushing a branch, copies it from a local repository to a remote repository.    Push Feature Branch to Origin.   Cloud image of the feature branch to be merged into your origin repository.      The git branch command lists all of the branches that exist in your local repository.  How many branches are in your local repository?     1 - main     Look again, you should see more than just the main branch.      1 - feature branch that you created in     Look again, you should see more than just the feature branch .      2 - main and feature branch that you created in     Correct! Your local repository will have both the main branch and your feature branch .      3 or more with differing branch names    If you have more than 2 branches perhaps you created a feature branch multiple times by accident.     Refer to and look at the local branches on your machine.    Use your browser to look at your origin repository on GitHub.   How many branches appear in your origin repository on GitHub?     1 - main     Correct! There is only 1 branch, main in your origin repository on GitHub.      1 - feature branch that you created in     Look again, your feature branch should not be listed in GitHub as it is only in your local repository.      2 - main and feature branch that you created in     Look again, your feature branch should not be listed in GitHub as it is only in your local repository.      3 or more with differing branch names    Perhaps you aren't in your origin repository. Make sure you see your GitHub userid in the upper left hand corner of your GitHub tab.     Make sure you are in your origin repository, not the upstream repository. Refer to and look at the origin to see what branches appear on GitHub.   Why is there a difference between the branches in your origin repository and your local repository?     You created a branch in your local repository but it does not appear in the origin repository yet.    Correct!      You created a branch in the origin repository but it does not appear in your local repository.    Your branch is in your local repository, not the origin repository.      Someone else created a branch in the origin repository.    Branches are created in the local repository. It is possible that someone else created a branch in their local repository and pushed it to their origin. You have a different origin repository so you would not see it.      Someone else created a branch in their local repository and it appears in the origin repository.    It is possible that someone else created a branch in their local repository and pushed it to their origin. You have a different origin repository so you would not see it.     All the work you have done in this chapter is on your local machine. What should be appearing in your local repository that is not in the origin repository?     Pushing your Feature Branch:    The git push <remote> <branch> command will push the specified branch of your local repository to the specified remote repository (i.e. on GitHub).  You will need to push your feature branch from your local repository to your origin repository on GitHub. You have given your remote repository the name origin which you can use instead of the full URL. For example, git push origin <branch> and the name of your branch where you committed your change. Type the command now.  The output should not contain any error messages. If you see error messages, make sure you spelled your branch name correctly and your command is in the proper format and does not include < >. The last few lines should also give you some indication that your push was successful. Look at the last two lines of output produced.      The second to last line is the URL of the origin repository.    Correct!      The last line provides the name of the branch in the local repository that was pushed to the origin repository.    Correct!      The second to last line is the URL of your local repository.    Your local repository does not have a URL, it is on your local machine.      The last line provides the URL of the branch in the local repository that was pushed to the origin repository.    This shows the name of the branch, not a URL.     There are several lines of output that mention deltas. Ignore these. Make sure you are looking at the last two lines which begin with To and a hexademical code.    Visit your origin repository on GitHub and check that the branch was pushed. You may have to reload the page.  How can you tell your branch was pushed?     The number next to the Branches link is now 2.    Correct! The number of branches should have increased.      When I click on Branches my branch is now listed in addition to main .    Correct! You should be able to see both branches on this page.      The number of issues has increased.    Pushing a branch will not create an issues.      The number of pull requests has increased.    Pushing a branch will not create a pull request.     There are multiple ways you can tell that your branch has been pushed by looking at the origin repository on GitHub.    "
},
{
  "id": "fig-pushing-feature-branch",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#fig-pushing-feature-branch",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": " Push Feature Branch to Origin.   Cloud image of the feature branch to be merged into your origin repository.   "
},
{
  "id": "ex-list-branches",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-list-branches",
  "type": "Exercise",
  "number": "3.7.1",
  "title": "",
  "body": " The git branch command lists all of the branches that exist in your local repository.  How many branches are in your local repository?     1 - main     Look again, you should see more than just the main branch.      1 - feature branch that you created in     Look again, you should see more than just the feature branch .      2 - main and feature branch that you created in     Correct! Your local repository will have both the main branch and your feature branch .      3 or more with differing branch names    If you have more than 2 branches perhaps you created a feature branch multiple times by accident.     Refer to and look at the local branches on your machine.  "
},
{
  "id": "ex-branch-diff",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-branch-diff",
  "type": "Exercise",
  "number": "3.7.2",
  "title": "",
  "body": " Use your browser to look at your origin repository on GitHub.   How many branches appear in your origin repository on GitHub?     1 - main     Correct! There is only 1 branch, main in your origin repository on GitHub.      1 - feature branch that you created in     Look again, your feature branch should not be listed in GitHub as it is only in your local repository.      2 - main and feature branch that you created in     Look again, your feature branch should not be listed in GitHub as it is only in your local repository.      3 or more with differing branch names    Perhaps you aren't in your origin repository. Make sure you see your GitHub userid in the upper left hand corner of your GitHub tab.     Make sure you are in your origin repository, not the upstream repository. Refer to and look at the origin to see what branches appear on GitHub.   Why is there a difference between the branches in your origin repository and your local repository?     You created a branch in your local repository but it does not appear in the origin repository yet.    Correct!      You created a branch in the origin repository but it does not appear in your local repository.    Your branch is in your local repository, not the origin repository.      Someone else created a branch in the origin repository.    Branches are created in the local repository. It is possible that someone else created a branch in their local repository and pushed it to their origin. You have a different origin repository so you would not see it.      Someone else created a branch in their local repository and it appears in the origin repository.    It is possible that someone else created a branch in their local repository and pushed it to their origin. You have a different origin repository so you would not see it.     All the work you have done in this chapter is on your local machine. What should be appearing in your local repository that is not in the origin repository?  "
},
{
  "id": "topic-pushing-a-branch-to-your-origin-3-6",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#topic-pushing-a-branch-to-your-origin-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pushing your Feature Branch: "
},
{
  "id": "ex-push-branch-linux",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-push-branch-linux",
  "type": "Exercise",
  "number": "3.7.3",
  "title": "",
  "body": " The git push <remote> <branch> command will push the specified branch of your local repository to the specified remote repository (i.e. on GitHub).  You will need to push your feature branch from your local repository to your origin repository on GitHub. You have given your remote repository the name origin which you can use instead of the full URL. For example, git push origin <branch> and the name of your branch where you committed your change. Type the command now.  The output should not contain any error messages. If you see error messages, make sure you spelled your branch name correctly and your command is in the proper format and does not include < >. The last few lines should also give you some indication that your push was successful. Look at the last two lines of output produced.      The second to last line is the URL of the origin repository.    Correct!      The last line provides the name of the branch in the local repository that was pushed to the origin repository.    Correct!      The second to last line is the URL of your local repository.    Your local repository does not have a URL, it is on your local machine.      The last line provides the URL of the branch in the local repository that was pushed to the origin repository.    This shows the name of the branch, not a URL.     There are several lines of output that mention deltas. Ignore these. Make sure you are looking at the last two lines which begin with To and a hexademical code.  "
},
{
  "id": "ex-push-error-linux",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-push-error-linux",
  "type": "Exercise",
  "number": "3.7.4",
  "title": "",
  "body": " Visit your origin repository on GitHub and check that the branch was pushed. You may have to reload the page.  How can you tell your branch was pushed?     The number next to the Branches link is now 2.    Correct! The number of branches should have increased.      When I click on Branches my branch is now listed in addition to main .    Correct! You should be able to see both branches on this page.      The number of issues has increased.    Pushing a branch will not create an issues.      The number of pull requests has increased.    Pushing a branch will not create a pull request.     There are multiple ways you can tell that your branch has been pushed by looking at the origin repository on GitHub.  "
},
{
  "id": "topic-creating-a-pull-request",
  "level": "1",
  "url": "topic-creating-a-pull-request.html",
  "type": "Section",
  "number": "3.8",
  "title": "Creating a Pull Request",
  "body": " Creating a Pull Request   A pull request is the mechanism by which you ask the maintainers of a project to consider merging your changes into the upstream main branch.     As shown in , a pull request is made from your origin repository, which must contain your feature branch, to the upstream repository. In the last section, you pushed your feature branch to your origin repository, so you are now ready to make a pull request.    Making a Pull Request.   Cloud image of the state of the repository when making a pull request.      There are a number of different ways to make a pull request in GitHub. In general, they are all equivalent and it won’t matter which one you use. The following steps will walk you through one of those ways.   When you first push a feature branch GitHub assumes that you are likely to make a pull request for it. To make this easy it will automatically display a big green “Compare & pull request” button at the top of the page for your origin repository.    GitHub compare and pull request button image.    Click that button. You will use the page that appears to create your pull request.   A gray bar similar to the one shown below should appear at the top of the page.    Image of the GitHub bar showing the repository and branch for the pull request.    This bar specifies the repositories and branches that are involved in the pull request. That is, they indicate which branch you are requesting to be pulled from which repository and to which branch in which repository you would like it to be merged.  Note that the specific information that you see in your browser will be different than what is shown above.  The questions in this exercise will help you to better understand what this information means.   The terms “Base Repository” and “Head Repository” are generic labels that GitHub uses for the two repositories that are involved in the pull request. Often, and in our case, these two repositories will be your origin repository and the project's upstream repository. Match the right hand column with either head repository or base repository to indicate which term refers to your origin and which refers to the upstream.     head repository  your origin repository     base repository  the upstream    The base is where you want your changes merged into\/the repository you created your fork from. The head is where your changes are being pulled from\/the branch you pushed to your GitHub account from your local machine.   The information in the gray bar also indicates the branches involved in the pull request. It uses the generic labels of base and compare for these branches. Match the right hand column with either base branch or compare branch to indicate which is “pulled from” or “merged into”.     base branch  merged into     compare branch  pulled from    The base is where you want your changes merged into. The head is where your changes are being pulled from.    To finish making your pull request (PR) you will need to add some additional details. Complete the following steps in your browser to create your PR. You do not need to give individual answers for each step here. The details you provide will become a part of your pull request and your instructor will see them on GitHub.   Give your PR a descriptive title - a similar idea to using meaningful commit messages.   Replace the <add description> in the body of the PR with a longer description of your changes.   If a PR fixes an issue, which yours does, then you should include a line in the body of the PR that says exactly: Fixes #123 or exactly: Closes #123 .  When a PR with one of these lines is merged into the project the listed ticket from the issue tracker (e.g. 123 in this example) will be closed automatically. Including these lines is very helpful to the project maintainers because then they do not have to remember to go close the associated ticket each time they merge a pull request.  Add a line to the body of the PR that will close the issue that you fixed.  The #123 part of the line should automatically become a link to the issue. If it does not, check to be sure you have entered the information exactly as shown above.   Check the status of your PR and confirm that it can be merged automatically. The status will be listed at the top of the GitHub page below the image from    Click the green button to create the Pull Request.    GitHub create pull request button image.      Go to the upstream repository on GitHub and open the “Pull Requests” tab:    GitHub pull requests tab image.    Find your Pull Request and give a link to it here.          Thank you.      The upstream repository is the repository you forked from. Double check that you aren't in your origin repository.      In GitHub look at the top left side of the browser window. If it says \"forked from\" with a link it means you are in your fork instead of the upstream repository. Click that link to go to the upstream repository.    On your pull request page there will be “Files Changed” tab:    GitHub pull requests tab image.    Open that tab. At the bottom of that page will be a diff that shows the changes that you have made. This diff shows both the upstream version of the code and your version of the code. It also indicates the changes you have made. The project maintainers will often use this diff to see the details of what you have changed.   Which of the following describes how the diff indicates the changes that you made?     The line(s) which contains the change(s) appears twice. Once in red with the old version and once in green with the new version. The change(s) appear in both in bold.    Correct! You can see the changes by comparing the red and green lines.      The line(s) which contains the change(s) appears once in red.    The red only shows what is being deleted.      The line(s) which contains the change(s) appears once in green.    The green only shows what is being inserted.      Only the changed word(s) appear with the old in strike through and the new next to it.    GitHub doesn't use strike through to indicate changes.     The diff command will color code the changes. Lines that are changed will show both the original line and the updated line.    "
},
{
  "id": "topic-creating-a-pull-request-2-1",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#topic-creating-a-pull-request-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pull request "
},
{
  "id": "fig-pull-request",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#fig-pull-request",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": " Making a Pull Request.   Cloud image of the state of the repository when making a pull request.   "
},
{
  "id": "ex-pull-request",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#ex-pull-request",
  "type": "Exercise",
  "number": "3.8.1",
  "title": "",
  "body": " There are a number of different ways to make a pull request in GitHub. In general, they are all equivalent and it won’t matter which one you use. The following steps will walk you through one of those ways.   When you first push a feature branch GitHub assumes that you are likely to make a pull request for it. To make this easy it will automatically display a big green “Compare & pull request” button at the top of the page for your origin repository.    GitHub compare and pull request button image.    Click that button. You will use the page that appears to create your pull request.   A gray bar similar to the one shown below should appear at the top of the page.    Image of the GitHub bar showing the repository and branch for the pull request.    This bar specifies the repositories and branches that are involved in the pull request. That is, they indicate which branch you are requesting to be pulled from which repository and to which branch in which repository you would like it to be merged.  Note that the specific information that you see in your browser will be different than what is shown above.  The questions in this exercise will help you to better understand what this information means.   The terms “Base Repository” and “Head Repository” are generic labels that GitHub uses for the two repositories that are involved in the pull request. Often, and in our case, these two repositories will be your origin repository and the project's upstream repository. Match the right hand column with either head repository or base repository to indicate which term refers to your origin and which refers to the upstream.     head repository  your origin repository     base repository  the upstream    The base is where you want your changes merged into\/the repository you created your fork from. The head is where your changes are being pulled from\/the branch you pushed to your GitHub account from your local machine.   The information in the gray bar also indicates the branches involved in the pull request. It uses the generic labels of base and compare for these branches. Match the right hand column with either base branch or compare branch to indicate which is “pulled from” or “merged into”.     base branch  merged into     compare branch  pulled from    The base is where you want your changes merged into. The head is where your changes are being pulled from.  "
},
{
  "id": "ex-pull-request-finish",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#ex-pull-request-finish",
  "type": "Exercise",
  "number": "3.8.2",
  "title": "",
  "body": " To finish making your pull request (PR) you will need to add some additional details. Complete the following steps in your browser to create your PR. You do not need to give individual answers for each step here. The details you provide will become a part of your pull request and your instructor will see them on GitHub.   Give your PR a descriptive title - a similar idea to using meaningful commit messages.   Replace the <add description> in the body of the PR with a longer description of your changes.   If a PR fixes an issue, which yours does, then you should include a line in the body of the PR that says exactly: Fixes #123 or exactly: Closes #123 .  When a PR with one of these lines is merged into the project the listed ticket from the issue tracker (e.g. 123 in this example) will be closed automatically. Including these lines is very helpful to the project maintainers because then they do not have to remember to go close the associated ticket each time they merge a pull request.  Add a line to the body of the PR that will close the issue that you fixed.  The #123 part of the line should automatically become a link to the issue. If it does not, check to be sure you have entered the information exactly as shown above.   Check the status of your PR and confirm that it can be merged automatically. The status will be listed at the top of the GitHub page below the image from    Click the green button to create the Pull Request.    GitHub create pull request button image.    "
},
{
  "id": "ex-pull-request-find",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#ex-pull-request-find",
  "type": "Exercise",
  "number": "3.8.3",
  "title": "",
  "body": " Go to the upstream repository on GitHub and open the “Pull Requests” tab:    GitHub pull requests tab image.    Find your Pull Request and give a link to it here.          Thank you.      The upstream repository is the repository you forked from. Double check that you aren't in your origin repository.      In GitHub look at the top left side of the browser window. If it says \"forked from\" with a link it means you are in your fork instead of the upstream repository. Click that link to go to the upstream repository.  "
},
{
  "id": "ex-pull-request-files",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#ex-pull-request-files",
  "type": "Exercise",
  "number": "3.8.4",
  "title": "",
  "body": " On your pull request page there will be “Files Changed” tab:    GitHub pull requests tab image.    Open that tab. At the bottom of that page will be a diff that shows the changes that you have made. This diff shows both the upstream version of the code and your version of the code. It also indicates the changes you have made. The project maintainers will often use this diff to see the details of what you have changed.   Which of the following describes how the diff indicates the changes that you made?     The line(s) which contains the change(s) appears twice. Once in red with the old version and once in green with the new version. The change(s) appear in both in bold.    Correct! You can see the changes by comparing the red and green lines.      The line(s) which contains the change(s) appears once in red.    The red only shows what is being deleted.      The line(s) which contains the change(s) appears once in green.    The green only shows what is being inserted.      Only the changed word(s) appear with the old in strike through and the new next to it.    GitHub doesn't use strike through to indicate changes.     The diff command will color code the changes. Lines that are changed will show both the original line and the updated line.  "
},
{
  "id": "topic-git-command-summary-upstreaming",
  "level": "1",
  "url": "topic-git-command-summary-upstreaming.html",
  "type": "Section",
  "number": "3.9",
  "title": "Git Command Summary",
  "body": " Git Command Summary   It will take a while for this process and all of the commands to become a natural part of the way you work. Until that happens it is often useful to have a short concise cheat sheet of the command for accomplishing each task.      Match the tasks on the right with the appropriate git command listed on the left.     git log  Display recent commits made to the active branch.     git branch <branch>  Create a new feature branch.     git branch  Lists all branches.     git switch <branch>  Change the active branch     git status  Check the current state of your local repo.     git diff  Displays unstaged changes.     git diff --staged  Displays staged changes.   Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.    Match the tasks on the right with the appropriate git command listed on the left.     git stage <file name>  Stage changed files to be committed to the repo.     git add <file name>  Another way to stage changed files for a commit.     git commit -m \"message\"  Commit staged files with a message.     git push <remote> <branch>  Push a feature branch to your origin.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.    "
},
{
  "id": "ex-git-commands-summary-upstreaming",
  "level": "2",
  "url": "topic-git-command-summary-upstreaming.html#ex-git-commands-summary-upstreaming",
  "type": "Exercise",
  "number": "3.9.1",
  "title": "",
  "body": " Match the tasks on the right with the appropriate git command listed on the left.     git log  Display recent commits made to the active branch.     git branch <branch>  Create a new feature branch.     git branch  Lists all branches.     git switch <branch>  Change the active branch     git status  Check the current state of your local repo.     git diff  Displays unstaged changes.     git diff --staged  Displays staged changes.   Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.  "
},
{
  "id": "ex-git-commands-summary-upstreaming-2",
  "level": "2",
  "url": "topic-git-command-summary-upstreaming.html#ex-git-commands-summary-upstreaming-2",
  "type": "Exercise",
  "number": "3.9.2",
  "title": "",
  "body": " Match the tasks on the right with the appropriate git command listed on the left.     git stage <file name>  Stage changed files to be committed to the repo.     git add <file name>  Another way to stage changed files for a commit.     git commit -m \"message\"  Commit staged files with a message.     git push <remote> <branch>  Push a feature branch to your origin.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.  "
},
{
  "id": "topic-gitkit-feedback-upstreaming",
  "level": "1",
  "url": "topic-gitkit-feedback-upstreaming.html",
  "type": "Section",
  "number": "3.10",
  "title": "GitKit Feedback",
  "body": " GitKit Feedback   To help us improve this chapter for future semesters please consider clicking this link to complete a short survey which should take approximately 5 minutes to complete.  Thank you for your time and assistance, it is greatly appreciated!    "
},
{
  "id": "topic-understanding-changes-to-the-upstream-repository",
  "level": "1",
  "url": "topic-understanding-changes-to-the-upstream-repository.html",
  "type": "Section",
  "number": "4.1",
  "title": "Understanding Changes to the Upstream Repository",
  "body": " Understanding Changes to the Upstream Repository   If the upstream maintainers decide that the changes in your PR (pull request) are good for the project, they will merge them into the upstream main branch. That way they become a part of the main project, and everyone can benefit from your work. In class your instructor played the role of an upstream maintainer and demonstrated how the changes contained in pull requests are merged.      illustrates the state after several commits have been merged into upstream main .    Changes Merged into Upstream.   Cloud image of the changes merged into upstream.      Answer the following questions using    Which commits (give the colors) were merged into the upstream main since the contributor created the feature branch that is shown?     Red      Yellow      Green      Blue      Pink      Lime Green     Look at which commits are new in upstream that are not part of the local repository's main or feature branch.   Which of the commits did the managers merge from the contributor's pull request?     Red    Red was in main prior to the contributor creating the feature branch.      Yellow    Yellow was in main prior to the contributor creating the feature branch.      Green    Green was in main prior to the contributor creating the feature branch.      Blue    Blue was part of the contributor's feature branch.      Pink    Pink was part of another contributor's pull request.      Lime Green    Lime green was part of another contributor's pull request.     Look at which commits are in the local repository's feature branch.   How could have the pink commit gotten into the upstream main ?     The contributor made the pink commit as part of their branch.    The contributor's branch did not contain the pink commit.      The manager accepted the contributor's pull request.    The contributor's pull request contained the blue commit, not the pink commit.      The manager accepted a pull request of another contributor which contained the pink commit.    The pink commit was part of a branch that another contributor submitted as part of a pull request.      The pink commit is not part of the upstream main .    Pink is part of the upstream main . It was merged after the pull request that contained the blue commit.     Look at which commits are in the local repository's feature branch. This shows the changes made by this contributor. Other changes were made by other contributors and accepted by the manager as part of a pull request.    GitHub will inform you when the active branch in your origin repo is out of synch with the upstream.  Use your browser to visit your origin repo on GitHub and ensure that the main branch is selected. Find the part of the page that indicates that your main branch is behind (i.e. not the same as, or out of synch with) the upstream main .  If you do not see a message that your main branch is behind the upstream main branch go to of this chapter and follow the instructions there. Once you complete , return to .   Which of the following messages do you see that indicates that your origin’s main branch is behind the upstream main ?     This branch is xxx commits behind main . Where xxx is a number.    Correct!      This branch is xxx commits ahead of main . Where xxx is a number.    Your origin main branch would be ahead of upstream main if it contains changes that upstream main does not which is not the case.      This branch is up to date with main .    Your origin's main branch should not be up to date with the upstream main .     Think about what happens if the manager accepts pull requests. Where do those changes go, upstream or origin?   Which of the following describes what has happened that caused your origin’s main branch to get behind the upstream main ?     Another contributor pushed to upstream main .    No one can push to upstream main .      You have changes in your local branch that have not been pushed up to the upstream main .    You cannot push to upsteam main .      You haven't pushed your local changes to your remote branch.    Your origin's feature branch does not impact whether or not the origin's main branch is up to date with the upstream main .      The manager accepted a pull request of another contributor which is now part of the upstream main . Your origin's main branch has not been updated to include these changes.    When the manager accepted the pull request those changes were merged into the upstream main . You need to pull those changes into your local main branch and push those changes to the origin.     Think about what changes may have been made while you were working on your branch. What might have happened during that time.    "
},
{
  "id": "fig-changes-merged-into-upstream",
  "level": "2",
  "url": "topic-understanding-changes-to-the-upstream-repository.html#fig-changes-merged-into-upstream",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " Changes Merged into Upstream.   Cloud image of the changes merged into upstream.   "
},
{
  "id": "ex-merged-commits",
  "level": "2",
  "url": "topic-understanding-changes-to-the-upstream-repository.html#ex-merged-commits",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": " Answer the following questions using    Which commits (give the colors) were merged into the upstream main since the contributor created the feature branch that is shown?     Red      Yellow      Green      Blue      Pink      Lime Green     Look at which commits are new in upstream that are not part of the local repository's main or feature branch.   Which of the commits did the managers merge from the contributor's pull request?     Red    Red was in main prior to the contributor creating the feature branch.      Yellow    Yellow was in main prior to the contributor creating the feature branch.      Green    Green was in main prior to the contributor creating the feature branch.      Blue    Blue was part of the contributor's feature branch.      Pink    Pink was part of another contributor's pull request.      Lime Green    Lime green was part of another contributor's pull request.     Look at which commits are in the local repository's feature branch.   How could have the pink commit gotten into the upstream main ?     The contributor made the pink commit as part of their branch.    The contributor's branch did not contain the pink commit.      The manager accepted the contributor's pull request.    The contributor's pull request contained the blue commit, not the pink commit.      The manager accepted a pull request of another contributor which contained the pink commit.    The pink commit was part of a branch that another contributor submitted as part of a pull request.      The pink commit is not part of the upstream main .    Pink is part of the upstream main . It was merged after the pull request that contained the blue commit.     Look at which commits are in the local repository's feature branch. This shows the changes made by this contributor. Other changes were made by other contributors and accepted by the manager as part of a pull request.  "
},
{
  "id": "ex-origin-main-behind-main",
  "level": "2",
  "url": "topic-understanding-changes-to-the-upstream-repository.html#ex-origin-main-behind-main",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": " GitHub will inform you when the active branch in your origin repo is out of synch with the upstream.  Use your browser to visit your origin repo on GitHub and ensure that the main branch is selected. Find the part of the page that indicates that your main branch is behind (i.e. not the same as, or out of synch with) the upstream main .  If you do not see a message that your main branch is behind the upstream main branch go to of this chapter and follow the instructions there. Once you complete , return to .   Which of the following messages do you see that indicates that your origin’s main branch is behind the upstream main ?     This branch is xxx commits behind main . Where xxx is a number.    Correct!      This branch is xxx commits ahead of main . Where xxx is a number.    Your origin main branch would be ahead of upstream main if it contains changes that upstream main does not which is not the case.      This branch is up to date with main .    Your origin's main branch should not be up to date with the upstream main .     Think about what happens if the manager accepts pull requests. Where do those changes go, upstream or origin?   Which of the following describes what has happened that caused your origin’s main branch to get behind the upstream main ?     Another contributor pushed to upstream main .    No one can push to upstream main .      You have changes in your local branch that have not been pushed up to the upstream main .    You cannot push to upsteam main .      You haven't pushed your local changes to your remote branch.    Your origin's feature branch does not impact whether or not the origin's main branch is up to date with the upstream main .      The manager accepted a pull request of another contributor which is now part of the upstream main . Your origin's main branch has not been updated to include these changes.    When the manager accepted the pull request those changes were merged into the upstream main . You need to pull those changes into your local main branch and push those changes to the origin.     Think about what changes may have been made while you were working on your branch. What might have happened during that time.  "
},
{
  "id": "topic-overview-of-synchronizing-with-the-upstream-repository",
  "level": "1",
  "url": "topic-overview-of-synchronizing-with-the-upstream-repository.html",
  "type": "Section",
  "number": "4.2",
  "title": "Overview of Synchronizing with the Upstream Repository",
  "body": " Overview of Synchronizing with the Upstream Repository   As changes from pull requests (yours and others) are merged into upstream main , the main branches in your local and origin repos will get out of synch with the upstream .   Now, recall that upstream main should be the starting point for all new work. So, before you can work on something new, you’ll want to make your main branches look like the upstream main (i.e. you will synchronize them with the upstream). This is a two-step process. You will pull the upstream main into your local repository and then you will push it to your origin. shows how pulling main from the upstream and then pushing it to your origin synchs the main branches.    Synch with Upstream.   Cloud image of how upstream and the local repository are out of synch.        Answer the following questions using    Which action copies changes from the upstream to your local repository?     Pushing to origin's main branch.    Pushing to your origin's main is the left side of the figure and takes your local changes and puts them to GitHub.      Pulling from origin's main branch.    You don't pull from origin's main branch, you push your changes to it.      Pushing to upstream main .    You don't have permission to push to upstream main . Code gets merged into upstream main when a pull request is accepted by the manager.      Pulling from upstream main .    Pulling from upstream main takes the changes that have been merged into the main branch and pulls them to your local repository.      Switching to your feature branch.    Switching to your feature branch is done on your local machine so you can make changes that will eventually be part of a pull request.     Look back to at the figure to see which arrow goes from the upstream to your local repository.   Which action copies changes from your local repository to your origin repository?     Pushing to origin's main branch.    Pushing to your origin's main is the left side of the figure and takes your local changes and puts them to GitHub.      Pulling from origin's main branch.    You don't pull from origin's main branch, you push your changes to it.      Pushing to upstream main .    You don't have permission to push to upstream main . Code gets merged into upstream main when a pull request is accepted by the manager.      Pulling from upstream main .    Pulling from upstream main takes the changes that have been merged into the main branch and pulls them to your local repository.      Switching to your feature branch.    Switching to your feature branch is done on your local machine so you can make changes that will eventually be part of a pull request.     Look back to at the figure to see which arrow goes from your local repository to the origin.    "
},
{
  "id": "fig-synching-with-upstream",
  "level": "2",
  "url": "topic-overview-of-synchronizing-with-the-upstream-repository.html#fig-synching-with-upstream",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " Synch with Upstream.   Cloud image of how upstream and the local repository are out of synch.   "
},
{
  "id": "ex-over-synch",
  "level": "2",
  "url": "topic-overview-of-synchronizing-with-the-upstream-repository.html#ex-over-synch",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": " Answer the following questions using    Which action copies changes from the upstream to your local repository?     Pushing to origin's main branch.    Pushing to your origin's main is the left side of the figure and takes your local changes and puts them to GitHub.      Pulling from origin's main branch.    You don't pull from origin's main branch, you push your changes to it.      Pushing to upstream main .    You don't have permission to push to upstream main . Code gets merged into upstream main when a pull request is accepted by the manager.      Pulling from upstream main .    Pulling from upstream main takes the changes that have been merged into the main branch and pulls them to your local repository.      Switching to your feature branch.    Switching to your feature branch is done on your local machine so you can make changes that will eventually be part of a pull request.     Look back to at the figure to see which arrow goes from the upstream to your local repository.   Which action copies changes from your local repository to your origin repository?     Pushing to origin's main branch.    Pushing to your origin's main is the left side of the figure and takes your local changes and puts them to GitHub.      Pulling from origin's main branch.    You don't pull from origin's main branch, you push your changes to it.      Pushing to upstream main .    You don't have permission to push to upstream main . Code gets merged into upstream main when a pull request is accepted by the manager.      Pulling from upstream main .    Pulling from upstream main takes the changes that have been merged into the main branch and pulls them to your local repository.      Switching to your feature branch.    Switching to your feature branch is done on your local machine so you can make changes that will eventually be part of a pull request.     Look back to at the figure to see which arrow goes from your local repository to the origin.  "
},
{
  "id": "topic-verifying-the-upstream-remote",
  "level": "1",
  "url": "topic-verifying-the-upstream-remote.html",
  "type": "Section",
  "number": "4.3",
  "title": "Creating and Verifying the Upstream Remote",
  "body": " Creating and Verifying the Upstream Remote   In order to pull changes from the upstream you will need to tell your local repository where the upstream is. In earlier figures, dotted orange lines were used to indicate that your local repository knew about the origin and that the origin knew about the upstream. But there was no orange dotted line from your local repository to the upstream. That is because, by default, your local repository isn’t aware of the upstream.  Like the last activity, you will be working within the development environment for this activity.    Restarting the Development Environment        Click here to open your development environment . Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use.\" and your browser window will look similar to the following:  The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.       Understanding Upstream   In order to pull from the upstream you will first need to make your local repository aware of the upstream. This is done by setting a remote for it. This exercise will walk you through that process.      The git remote -v command lists the names and URLs of all of the remote repositories (or just remotes for short) that your local repo knows about. Run this command in the directory that contains your local repository.    Examine the output of the git remote -v command from .   Is the URL for the origin remote in the main project GitHub space or in your GitHub space?     main project GitHub space    the main project GitHub space is the upstream, not the origin.      your GitHub space    Correct! The origin is in your GitHub space.     Think about where you cloned from and where you push your changes to.   Where does this remote appear in ?     lower left    The lower left is your local repository.      upper left    Correct! The upper left is the origin repository in your GitHub space.      upper right    The upper right is the main GitHub project space.     Look at the diagram again. The top part is the GitHub space, the bottom is your local machine.      Finding Upstream   To create a new remote that tells your local repo about the upstream you will need the URL of the upstream repo. Use your browser to navigate to the upstream FarmData2 repo that you are using for this course. Hint: You can find the upstream using the link from your origin repo in GitHub. Once you find the upstream, you can get the URL by using the “Code” button in the upstream repo, it ends in .git .      Enter the URL of the upstream below.         Thank you.      Be sure you are copying the URL of the upstream for your class given by your instructor.         Setting your Upstream Remote   The git remote command can also be used to add a new remote to your local repo.      The format for this command is:   git remote add <remote repo name> <remote repo URL>   Use the above command to create a remote named upstream that points to the FarmData2 upstream repository that you are using for this exercise.   Use the git remote -v command. What do you see that confirms that the new upstream remote has been added?      origin https:\/\/github.com\/yourClass\/theRepoName (fetch)    origin https:\/\/github.com\/yourClass\/theRepoName (push)     The origin is not the upstream.       upstream https:\/\/github.com\/yourClass\/theRepoName (fetch)    upstream https:\/\/github.com\/yourClass\/theRepoName (push)     Correct! The upstream fetch is where you are copying changes from.     None of the above.   You should have gotten one of these outputs.     Think about the different between origin vs. upstream.   The upstream remote provides your local repo with the information it needs to find the upstream repo. In git this information is represented using a URL. Where does this remote appear in ?     lower left    The lower left is your local repository.      upper left    The upper left is the origin repository in your GitHub space.      upper right    Correct! The upper right is upstream remote.     Look at the diagram again. The top part is the GitHub space, the bottom is your local machine. The left side is your space, the right side is the GitHub project space.     Note that you will only need to set the upstream remote once for a repository. Once the upstream remote is set you will be able to pull from the upstream repo as often as is necessary.  "
},
{
  "id": "ex-restarting-kitclient-for-synching",
  "level": "2",
  "url": "topic-verifying-the-upstream-remote.html#ex-restarting-kitclient-for-synching",
  "type": "Exercise",
  "number": "4.3.1.1",
  "title": "",
  "body": "Click here to open your development environment . Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use.\" and your browser window will look similar to the following:  The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.   "
},
{
  "id": "ex-setting-upstream-1",
  "level": "2",
  "url": "topic-verifying-the-upstream-remote.html#ex-setting-upstream-1",
  "type": "Exercise",
  "number": "4.3.2.1",
  "title": "",
  "body": " The git remote -v command lists the names and URLs of all of the remote repositories (or just remotes for short) that your local repo knows about. Run this command in the directory that contains your local repository.  "
},
{
  "id": "ex-setting-upstream-2",
  "level": "2",
  "url": "topic-verifying-the-upstream-remote.html#ex-setting-upstream-2",
  "type": "Exercise",
  "number": "4.3.2.2",
  "title": "",
  "body": " Examine the output of the git remote -v command from .   Is the URL for the origin remote in the main project GitHub space or in your GitHub space?     main project GitHub space    the main project GitHub space is the upstream, not the origin.      your GitHub space    Correct! The origin is in your GitHub space.     Think about where you cloned from and where you push your changes to.   Where does this remote appear in ?     lower left    The lower left is your local repository.      upper left    Correct! The upper left is the origin repository in your GitHub space.      upper right    The upper right is the main GitHub project space.     Look at the diagram again. The top part is the GitHub space, the bottom is your local machine.  "
},
{
  "id": "ex-setting-upstream-c-linux",
  "level": "2",
  "url": "topic-verifying-the-upstream-remote.html#ex-setting-upstream-c-linux",
  "type": "Exercise",
  "number": "4.3.3.1",
  "title": "",
  "body": " Enter the URL of the upstream below.         Thank you.      Be sure you are copying the URL of the upstream for your class given by your instructor.     "
},
{
  "id": "ex-setting-upstream-2-linux",
  "level": "2",
  "url": "topic-verifying-the-upstream-remote.html#ex-setting-upstream-2-linux",
  "type": "Exercise",
  "number": "4.3.4.1",
  "title": "",
  "body": " The format for this command is:   git remote add <remote repo name> <remote repo URL>   Use the above command to create a remote named upstream that points to the FarmData2 upstream repository that you are using for this exercise.   Use the git remote -v command. What do you see that confirms that the new upstream remote has been added?      origin https:\/\/github.com\/yourClass\/theRepoName (fetch)    origin https:\/\/github.com\/yourClass\/theRepoName (push)     The origin is not the upstream.       upstream https:\/\/github.com\/yourClass\/theRepoName (fetch)    upstream https:\/\/github.com\/yourClass\/theRepoName (push)     Correct! The upstream fetch is where you are copying changes from.     None of the above.   You should have gotten one of these outputs.     Think about the different between origin vs. upstream.   The upstream remote provides your local repo with the information it needs to find the upstream repo. In git this information is represented using a URL. Where does this remote appear in ?     lower left    The lower left is your local repository.      upper left    The upper left is the origin repository in your GitHub space.      upper right    Correct! The upper right is upstream remote.     Look at the diagram again. The top part is the GitHub space, the bottom is your local machine. The left side is your space, the right side is the GitHub project space.  "
},
{
  "id": "topic-pulling-the-upstream-main-branch",
  "level": "1",
  "url": "topic-pulling-the-upstream-main-branch.html",
  "type": "Section",
  "number": "4.4",
  "title": "Pulling the Upstream <code class=\"code-inline tex2jax_ignore\">main<\/code> Branch",
  "body": " Pulling the Upstream main Branch     The next step is to pull the changes to the main branch from the upstream repo to your local repo.   illustrates the state after several commits have been merged into upstream main .    Changes Merged into Upstream.   Cloud image of the changes merged into upstream that will be pulled.     This section walks you through that process.    To pull the changes from the upstream main branch into your local repo you first need to ensure that main is the active branch in your local repo. Check the active branch in your local repo. Which command could you use?      git log     The git log command tells you the commits made to the active branch.       git branch main     The git branch main command will create a new branch with the name main .       git status     Correct! The git status command tells you active branch.       git switch main     The git switch main command will change the active branch to main, not check what is the active branch.     Refer back to the section in the previous chapter on switching branches     If your active branch is not the main branch change the active branch now. What command changes the active branch to main?      git log     The git log command tells you the commits made to the active branch.       git branch main     The git branch main command will create a new branch with the name main .       git status     The git status command tells you active branch, it does not switch branches.       git switch main     Correct! The git switch main command will change the active branch to main.     Refer back to the section in the previous chapter on switching branches     The command   git pull --ff-only <remote> <branch>   will pull any new commits from the specified branch in the remote repo and add them onto the end of the active branch of your local repo. <branch> can be a name like origin . You will need to modify the git pull command above to pull and add the commits from the main branch of the upstream repo to your main branch.   Enter the modified git pull command below.         Thank you.      Please give the full git pull command using the format indicated in the question. Be sure not to leave in the < and > symbols. Replace the words remote and branch with the appropriate names.       Type in the command you wrote in and examine the output given. It should not contain any error messages. If it does, look at the format of the command from and try again. Which of the following is shown in the output of the git pull command?     The file(s) that were changed.      The number of additions to the files.      The URL of upstream .      The number of deletions to the files.      All of the branches in your local repository.     Make sure you look at all of the lines of output and the color coding of the lines.    "
},
{
  "id": "fig-changes-merged-into-upstream-pull",
  "level": "2",
  "url": "topic-pulling-the-upstream-main-branch.html#fig-changes-merged-into-upstream-pull",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " Changes Merged into Upstream.   Cloud image of the changes merged into upstream that will be pulled.   "
},
{
  "id": "ex-active-branch-a",
  "level": "2",
  "url": "topic-pulling-the-upstream-main-branch.html#ex-active-branch-a",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": " To pull the changes from the upstream main branch into your local repo you first need to ensure that main is the active branch in your local repo. Check the active branch in your local repo. Which command could you use?      git log     The git log command tells you the commits made to the active branch.       git branch main     The git branch main command will create a new branch with the name main .       git status     Correct! The git status command tells you active branch.       git switch main     The git switch main command will change the active branch to main, not check what is the active branch.     Refer back to the section in the previous chapter on switching branches   "
},
{
  "id": "ex-active-branch-b",
  "level": "2",
  "url": "topic-pulling-the-upstream-main-branch.html#ex-active-branch-b",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": " If your active branch is not the main branch change the active branch now. What command changes the active branch to main?      git log     The git log command tells you the commits made to the active branch.       git branch main     The git branch main command will create a new branch with the name main .       git status     The git status command tells you active branch, it does not switch branches.       git switch main     Correct! The git switch main command will change the active branch to main.     Refer back to the section in the previous chapter on switching branches   "
},
{
  "id": "ex-active-branch-c",
  "level": "2",
  "url": "topic-pulling-the-upstream-main-branch.html#ex-active-branch-c",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": " The command   git pull --ff-only <remote> <branch>   will pull any new commits from the specified branch in the remote repo and add them onto the end of the active branch of your local repo. <branch> can be a name like origin . You will need to modify the git pull command above to pull and add the commits from the main branch of the upstream repo to your main branch.   Enter the modified git pull command below.         Thank you.      Please give the full git pull command using the format indicated in the question. Be sure not to leave in the < and > symbols. Replace the words remote and branch with the appropriate names.     "
},
{
  "id": "ex-active-branch-d",
  "level": "2",
  "url": "topic-pulling-the-upstream-main-branch.html#ex-active-branch-d",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": " Type in the command you wrote in and examine the output given. It should not contain any error messages. If it does, look at the format of the command from and try again. Which of the following is shown in the output of the git pull command?     The file(s) that were changed.      The number of additions to the files.      The URL of upstream .      The number of deletions to the files.      All of the branches in your local repository.     Make sure you look at all of the lines of output and the color coding of the lines.  "
},
{
  "id": "topic-pushing-main-to-your-origin",
  "level": "1",
  "url": "topic-pushing-main-to-your-origin.html",
  "type": "Section",
  "number": "4.5",
  "title": "Pushing <code class=\"code-inline tex2jax_ignore\">main<\/code> to Your Origin",
  "body": " Pushing main to Your Origin      Your local main branch is now in synch with the upstream main branch. What’s left is to also synch the main branch in your origin repo.    Recall that you previously used the   git push <remote> <branch>   command to push your feature branch from your local repo to your origin repo. Use the git push command to push the main branch of your local repo to your remote origin repo.   Enter the modified git push command below.         Thank you.      Please give the full git push command using the format indicated in the question. Be sure not to leave in the < and > symbols. Replace the words remote and branch with the appropriate names.       Type in the command you wrote in and examine the output given. It should not contain any error messages. If it does, look at the format of the command from and try again.   Examine the output from . You should see a lot of information about deltas and objects. Those are terms related to the inner workings of git that we will not worry about. If you don’t see this information about deltas and objects but see an error message instead, revisit and try again.  The last two lines of the output in part a should contain some recognizable information. What do you think that these lines are telling you?     The URL of your origin on GitHub.      The name of the branch pushed to GitHub.      The URL of the upstream repository on GitHub.      A list of all the files changed in the local repository.      A list of all the branches in the local repository.     Only look at the last two lines, the one that starts with \"To\" and the one that starts with a SHA code.    As with most things related to Git and GitHub, there are a number of different ways to synchronize. For example, you can also fetch the changes from the upstream main to your origin and then pull them from there to your local repository. If you are curious, you can check out this GitHub link: Syncing a fork     "
},
{
  "id": "ex-synching-main-to-origin-a",
  "level": "2",
  "url": "topic-pushing-main-to-your-origin.html#ex-synching-main-to-origin-a",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": " Recall that you previously used the   git push <remote> <branch>   command to push your feature branch from your local repo to your origin repo. Use the git push command to push the main branch of your local repo to your remote origin repo.   Enter the modified git push command below.         Thank you.      Please give the full git push command using the format indicated in the question. Be sure not to leave in the < and > symbols. Replace the words remote and branch with the appropriate names.     "
},
{
  "id": "ex-synching-main-to-origin-b",
  "level": "2",
  "url": "topic-pushing-main-to-your-origin.html#ex-synching-main-to-origin-b",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": " Type in the command you wrote in and examine the output given. It should not contain any error messages. If it does, look at the format of the command from and try again.   Examine the output from . You should see a lot of information about deltas and objects. Those are terms related to the inner workings of git that we will not worry about. If you don’t see this information about deltas and objects but see an error message instead, revisit and try again.  The last two lines of the output in part a should contain some recognizable information. What do you think that these lines are telling you?     The URL of your origin on GitHub.      The name of the branch pushed to GitHub.      The URL of the upstream repository on GitHub.      A list of all the files changed in the local repository.      A list of all the branches in the local repository.     Only look at the last two lines, the one that starts with \"To\" and the one that starts with a SHA code.  "
},
{
  "id": "topic-deleting-a-feature-branch",
  "level": "1",
  "url": "topic-deleting-a-feature-branch.html",
  "type": "Section",
  "number": "4.6",
  "title": "Deleting a Feature Branch",
  "body": " Deleting a Feature Branch   Once your changes have been merged into the upstream main , and you have synchronized, there is no need for you to retain your feature branch. There is no harm in keeping it. But most developers will delete them to avoid having their repos become cluttered with old feature branches.    Deleting Feature Branches.   Cloud image of the feature branch.      shows the state that will result after deleting the feature branch from your local and origin repositories.      The first step is to delete the feature branch from your local repository. This exercise will walk you through that process.   It is not possible to delete the active branch. Drag the commands needed to switch from your feature branch to the main branch and then list all of the branches in your local repository. Not all commands will be used.     git switch main      git log      git branch      git switch <feature branch name>      git status     You will need two commands, the first one to switch to your branch and the second to check what the local branches are.   So, if you have not already, switch from your feature branch to the main branch. Then give a command that lists all of the branches in your local repository.  Which command did you type to list the local branches?      git switch     The git switch command is used to change the active branch.       git pull     The git pull command is used to pull changes from a remote repository to your local repository.       git commit     The git commit command is used to commit staged changes to the repository.       git branch     Correct! The git branch command is used to display all of branches in your local repository.     Refer back to the section on switching branches    From the output provided by how do you know which is the active branch?     It has an * next to it.      It appears in green.      It appears in bold.      It appears in italics.      It is not possible to tell the active branch based upon the output provided.     Refer back to the section on switching branches     The command git branch -D <branch> will delete a branch from your local repository.   Type the modified git branch command below.         Thank you.      Please give the full git branch command using the format indicated in the question. Be sure not to leave in the < and > symbols. Replace the word branch with your feature branch name.       Type the command from . Look at the output provided. Which of the following did you see?     Deleted branch (was <SHA code here>)    Correct!      error: branch <branch> not found.    Return to and try again.      branch deleted    Look at your output again.      there are no active branches    Look at your output again.     Look at your terminal window to see what appears after the git branch command you typed.     In the previous exercise you deleted your feature branch from your local repository.   How can you check if your feature branch exists in your origin repo on GitHub?     Go to the GitHub origin repo and click on the branches button.    Correct!      type <git branch>     This command shows the local branches.      type git branch -D <branch>     This command will delete a local branch      There is no way to check for branches on GitHub.    Take another look at the GitHub interface.     Go to the origin repository on GitHub and look at the options.   This feature branch no longer exists in your origin repo on GitHub.   You have only deleted the feature branch in your local repository. It still exists in your origin repository on GitHub.   Make sure you look at your repository on GitHub and click the \"Branches\" link.    You can delete your feature branch from your origin repo using the git CLI. The command   git push -d <remote> <branch>   will delete the specified branch from the specified remote repository. Use this command to delete your feature branch from your origin repo.         Thank you.      Please give the full git push -d command using the format indicated in the question. Be sure not to leave in the < and > symbols. Replace the word remote with your origina and branch with your feature branch name.       Type the command from . Look at the output provided. Which of the following did you see?      [deleted] <branch>    Correct!      error: unable to delete '<branch>': remote ref does not exist    Make sure the branch exists in the remote repo (see ).      delete completed    Look again at the output provided in the terminal window.      origin updated    Look again at the output provided in the terminal window.     Use your browser as you did in to see if your feature branch has been deleted from your origin repo on GitHub.   Use your browser as you did in to confirm that your feature branch is deleted from your origin repo on GitHub. If it has not been deleted, revisit and try again.    "
},
{
  "id": "fig-deleting-feature-branch",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#fig-deleting-feature-branch",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": " Deleting Feature Branches.   Cloud image of the feature branch.   "
},
{
  "id": "ex-deleting-feature-branch",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#ex-deleting-feature-branch",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": " The first step is to delete the feature branch from your local repository. This exercise will walk you through that process.   It is not possible to delete the active branch. Drag the commands needed to switch from your feature branch to the main branch and then list all of the branches in your local repository. Not all commands will be used.     git switch main      git log      git branch      git switch <feature branch name>      git status     You will need two commands, the first one to switch to your branch and the second to check what the local branches are.   So, if you have not already, switch from your feature branch to the main branch. Then give a command that lists all of the branches in your local repository.  Which command did you type to list the local branches?      git switch     The git switch command is used to change the active branch.       git pull     The git pull command is used to pull changes from a remote repository to your local repository.       git commit     The git commit command is used to commit staged changes to the repository.       git branch     Correct! The git branch command is used to display all of branches in your local repository.     Refer back to the section on switching branches    From the output provided by how do you know which is the active branch?     It has an * next to it.      It appears in green.      It appears in bold.      It appears in italics.      It is not possible to tell the active branch based upon the output provided.     Refer back to the section on switching branches   "
},
{
  "id": "ex-deleting-feature-branch-c",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#ex-deleting-feature-branch-c",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "",
  "body": " The command git branch -D <branch> will delete a branch from your local repository.   Type the modified git branch command below.         Thank you.      Please give the full git branch command using the format indicated in the question. Be sure not to leave in the < and > symbols. Replace the word branch with your feature branch name.     "
},
{
  "id": "ex-deleting-feature-branch-d",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#ex-deleting-feature-branch-d",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "",
  "body": " Type the command from . Look at the output provided. Which of the following did you see?     Deleted branch (was <SHA code here>)    Correct!      error: branch <branch> not found.    Return to and try again.      branch deleted    Look at your output again.      there are no active branches    Look at your output again.     Look at your terminal window to see what appears after the git branch command you typed.  "
},
{
  "id": "ex-deleting-feature-branch-on-github",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#ex-deleting-feature-branch-on-github",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "",
  "body": " In the previous exercise you deleted your feature branch from your local repository.   How can you check if your feature branch exists in your origin repo on GitHub?     Go to the GitHub origin repo and click on the branches button.    Correct!      type <git branch>     This command shows the local branches.      type git branch -D <branch>     This command will delete a local branch      There is no way to check for branches on GitHub.    Take another look at the GitHub interface.     Go to the origin repository on GitHub and look at the options.   This feature branch no longer exists in your origin repo on GitHub.   You have only deleted the feature branch in your local repository. It still exists in your origin repository on GitHub.   Make sure you look at your repository on GitHub and click the \"Branches\" link.  "
},
{
  "id": "ex-deleting-feature-branch-on-github-c",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#ex-deleting-feature-branch-on-github-c",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "",
  "body": " You can delete your feature branch from your origin repo using the git CLI. The command   git push -d <remote> <branch>   will delete the specified branch from the specified remote repository. Use this command to delete your feature branch from your origin repo.         Thank you.      Please give the full git push -d command using the format indicated in the question. Be sure not to leave in the < and > symbols. Replace the word remote with your origina and branch with your feature branch name.     "
},
{
  "id": "topic-deleting-a-feature-branch-3-7",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#topic-deleting-a-feature-branch-3-7",
  "type": "Exercise",
  "number": "4.6.6",
  "title": "",
  "body": " Type the command from . Look at the output provided. Which of the following did you see?      [deleted] <branch>    Correct!      error: unable to delete '<branch>': remote ref does not exist    Make sure the branch exists in the remote repo (see ).      delete completed    Look again at the output provided in the terminal window.      origin updated    Look again at the output provided in the terminal window.     Use your browser as you did in to see if your feature branch has been deleted from your origin repo on GitHub.   Use your browser as you did in to confirm that your feature branch is deleted from your origin repo on GitHub. If it has not been deleted, revisit and try again.  "
},
{
  "id": "topic-git-command-summary-synching",
  "level": "1",
  "url": "topic-git-command-summary-synching.html",
  "type": "Section",
  "number": "4.7",
  "title": "Git Command Summary",
  "body": " Git Command Summary   It will take a while for this process and all of the commands to become a natural part of the way you work. Until that happens it is often useful to have a short concise cheat sheet of the command for accomplishing each task.      Match the tasks on the right with the appropriate git command listed on the left.   Refer back to the sections in this chapter to see what each command does.     git remote -v  List your remote repos     git remote add <remote> <URL>  Add a new remote repo     git pull --ff-only <remote> <branch>  Synch a branch of your origin repo with your local repo     git push <remote> <branch>  Synch a branch of your local repo with the upstream     git branch -D <branch>  Delete a feature branch from your local repo     git push -d <remote> <branch>  Delete a feature branch from your origin    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.    "
},
{
  "id": "ex-git-commands-summary-synching",
  "level": "2",
  "url": "topic-git-command-summary-synching.html#ex-git-commands-summary-synching",
  "type": "Exercise",
  "number": "4.7.1",
  "title": "",
  "body": " Match the tasks on the right with the appropriate git command listed on the left.   Refer back to the sections in this chapter to see what each command does.     git remote -v  List your remote repos     git remote add <remote> <URL>  Add a new remote repo     git pull --ff-only <remote> <branch>  Synch a branch of your origin repo with your local repo     git push <remote> <branch>  Synch a branch of your local repo with the upstream     git branch -D <branch>  Delete a feature branch from your local repo     git push -d <remote> <branch>  Delete a feature branch from your origin    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.  "
},
{
  "id": "topic-lets-do-it-again",
  "level": "1",
  "url": "topic-lets-do-it-again.html",
  "type": "Section",
  "number": "4.8",
  "title": "Let’s Do it Again",
  "body": " Let's Do it Again   You’ve learned a lot about Git and GitHub. But, to become proficient with these tools takes a lot of repetition and practice. This section asks you to go through the process of finding an issue, fixing it and creating a pull request again. This is good practice but what you will be asked to do has also been carefully planned to set us up for the next chapter too!    Overview of Fixing an Issue     Now you will go through the process of fixing the issue and making a pull request. You will use the same process that you used for your “Round1” issue earlier. That process had a number of steps.    The steps are listed below in a jumbled-up order, determine the proper order.    Claim an issue    Create a new feature branch    Switch to the feature branch    Edit the local files   Stage your changes    Commit changes to the feature branch    Push the feature branch to your origin    Make a pull request to the upstream    Think about the full process that you've completed thus far starting from claiming the issue to work on it and getting it merged into the upstream repository.      Claim Round 2 Issue     The issue tracker in the upstream FarmData2 repository being used for these tasks.   Use the label dropdown in the issue tracker to filter for issues labeled with the “Round2” tag. How many issues are tagged with this label?     4      6      35      40     Make sure you have the Round2 tag selected in the issue tracker.    Clearly there are not enough “Round2” issues for everyone to have their own as was the case with the “Round1” issues. So, this time there will be multiple people working on the same issue.  Pick one of the “Round2” issues to work on and make a comment on it to indicate your interest in working on it. Note it is not necessary that the issue be assigned to you this time. Try to spread out across the issues so that multiple people have commented that they are working on each one. Type in the number of the issue you chose. Do not include the #.         Thank you for selecting an issue.      Make sure you have only typed in the issue number (25 for example) and that it is a Round2 issue.         Fix the Issue     Which of the following Git commands did you use for the steps indicated below. The command references that you created in may also come in handy here.   Review the git commands by looking at the git command summary in this and previous chapters.     git branch <branch>  Create feature branch     git switch <branch>  Switch to feature branch     git stage <file>  Add changes to stage     git commit -m \"message\"  Commit changes     git push  Push feature branch    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.   Which of the following would be the best name for a feature branch for issue #37 that adds a link to the NSF award in the Acknowledgements section?     issue37    This branch name doesn't provide enough information. What is issue 37?      adding-link    This branch name is too generic.      adding-nsf-link-acknowledgement    Correct! This branch name describes the work to be done in the branch.      nsf-acknowledgement    This branch name doesn't specify what is being done with regard to the NSF acknowledgement.     Refer back to the section on creating branches for information on branch names.   Which of the following would be the best commit message for the fix for issue 38 that adds a link to the GNOME Community Engagement Challenge in the acknowledgements?     Added the URL for GNOME to the acknowledgements section of the REAMDE file.    Correct! This commit message briefly but completing describes the change made.      Added URL.    This commit message doesn't provide enough information about the URL added.      Updated README.    This commit message doesn't provide enough information about what has been changed in the README file.      Fixed typo.    This commit message is too generic and does not describe the change for this issue.     Refer back to the section on creating branches for information on commit messages.      Upstream the Changes     Enter the full URL of your PR below.         Thank you for supplying your pull request URL.      Make sure you have the complete URL of the PR starting with https and ending with the number of your pull request.       Look at the base and head repositories listed in the PR. Which of the following statements are true?     The base repository is the upstream repository.      The base repository is my origin repository.      The base repository is my local repository.      The head repository is the upstream repository.      The head repository is my origin repository.      The head repository is my local repository.     In order for your work to be merged, it must be on GitHub. Think about where you pushed your changes to (head) and where you want them merged int (base).    Match the term to the appropriate branch.   Try again.     base branch  upstream main branch     compare branch  feature branch in your origin repo    Think about where you want to merge into (base) and what is being merged (compare).    What is the line number of the README.md file that you changed. Hint: use the diff you saw in the prior chapter .         Thank you.      Make sure you are only putting the line number that changed in the README file.       Because there were a limited number of “Round2” issues, other students will have been simultaneously making changes to fix the same lines in the same files. Which of the following describe how this might create a problem in the future.          Look at the lines numbers again using the diff command.     "
},
{
  "id": "ex-fixing-issue-ordering",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-fixing-issue-ordering",
  "type": "Exercise",
  "number": "4.8.1.1",
  "title": "",
  "body": " The steps are listed below in a jumbled-up order, determine the proper order.    Claim an issue    Create a new feature branch    Switch to the feature branch    Edit the local files   Stage your changes    Commit changes to the feature branch    Push the feature branch to your origin    Make a pull request to the upstream    Think about the full process that you've completed thus far starting from claiming the issue to work on it and getting it merged into the upstream repository.  "
},
{
  "id": "ex-claim-issue",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-claim-issue",
  "type": "Exercise",
  "number": "4.8.2.1",
  "title": "",
  "body": " The issue tracker in the upstream FarmData2 repository being used for these tasks.   Use the label dropdown in the issue tracker to filter for issues labeled with the “Round2” tag. How many issues are tagged with this label?     4      6      35      40     Make sure you have the Round2 tag selected in the issue tracker.  "
},
{
  "id": "ex-claim-issue-b",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-claim-issue-b",
  "type": "Exercise",
  "number": "4.8.2.2",
  "title": "",
  "body": " Clearly there are not enough “Round2” issues for everyone to have their own as was the case with the “Round1” issues. So, this time there will be multiple people working on the same issue.  Pick one of the “Round2” issues to work on and make a comment on it to indicate your interest in working on it. Note it is not necessary that the issue be assigned to you this time. Try to spread out across the issues so that multiple people have commented that they are working on each one. Type in the number of the issue you chose. Do not include the #.         Thank you for selecting an issue.      Make sure you have only typed in the issue number (25 for example) and that it is a Round2 issue.     "
},
{
  "id": "ex-fixing-issue-process",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-fixing-issue-process",
  "type": "Exercise",
  "number": "4.8.3.1",
  "title": "",
  "body": " Which of the following Git commands did you use for the steps indicated below. The command references that you created in may also come in handy here.   Review the git commands by looking at the git command summary in this and previous chapters.     git branch <branch>  Create feature branch     git switch <branch>  Switch to feature branch     git stage <file>  Add changes to stage     git commit -m \"message\"  Commit changes     git push  Push feature branch    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.   Which of the following would be the best name for a feature branch for issue #37 that adds a link to the NSF award in the Acknowledgements section?     issue37    This branch name doesn't provide enough information. What is issue 37?      adding-link    This branch name is too generic.      adding-nsf-link-acknowledgement    Correct! This branch name describes the work to be done in the branch.      nsf-acknowledgement    This branch name doesn't specify what is being done with regard to the NSF acknowledgement.     Refer back to the section on creating branches for information on branch names.   Which of the following would be the best commit message for the fix for issue 38 that adds a link to the GNOME Community Engagement Challenge in the acknowledgements?     Added the URL for GNOME to the acknowledgements section of the REAMDE file.    Correct! This commit message briefly but completing describes the change made.      Added URL.    This commit message doesn't provide enough information about the URL added.      Updated README.    This commit message doesn't provide enough information about what has been changed in the README file.      Fixed typo.    This commit message is too generic and does not describe the change for this issue.     Refer back to the section on creating branches for information on commit messages.  "
},
{
  "id": "ex-pull-request-info-b",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-pull-request-info-b",
  "type": "Exercise",
  "number": "4.8.4.1",
  "title": "",
  "body": " Enter the full URL of your PR below.         Thank you for supplying your pull request URL.      Make sure you have the complete URL of the PR starting with https and ending with the number of your pull request.     "
},
{
  "id": "ex-pull-request-info-c",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-pull-request-info-c",
  "type": "Exercise",
  "number": "4.8.4.2",
  "title": "",
  "body": " Look at the base and head repositories listed in the PR. Which of the following statements are true?     The base repository is the upstream repository.      The base repository is my origin repository.      The base repository is my local repository.      The head repository is the upstream repository.      The head repository is my origin repository.      The head repository is my local repository.     In order for your work to be merged, it must be on GitHub. Think about where you pushed your changes to (head) and where you want them merged int (base).  "
},
{
  "id": "ex-pull-request-info-e",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-pull-request-info-e",
  "type": "Exercise",
  "number": "4.8.4.3",
  "title": "",
  "body": " Match the term to the appropriate branch.   Try again.     base branch  upstream main branch     compare branch  feature branch in your origin repo    Think about where you want to merge into (base) and what is being merged (compare).  "
},
{
  "id": "ex-pull-request-info-g",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-pull-request-info-g",
  "type": "Exercise",
  "number": "4.8.4.4",
  "title": "",
  "body": " What is the line number of the README.md file that you changed. Hint: use the diff you saw in the prior chapter .         Thank you.      Make sure you are only putting the line number that changed in the README file.     "
},
{
  "id": "ex-pull-request-problem",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-pull-request-problem",
  "type": "Exercise",
  "number": "4.8.4.5",
  "title": "",
  "body": " Because there were a limited number of “Round2” issues, other students will have been simultaneously making changes to fix the same lines in the same files. Which of the following describe how this might create a problem in the future.          Look at the lines numbers again using the diff command.  "
},
{
  "id": "topic-gitkit-feedback-synching",
  "level": "1",
  "url": "topic-gitkit-feedback-synching.html",
  "type": "Section",
  "number": "4.9",
  "title": "GitKit Feedback",
  "body": " GitKit Feedback   To help us improve this chapter for future semesters please consider clicking this link to complete a short survey which should take approximately 5 minutes to complete.  Thank you for your time and assistance, it is greatly appreciated!    "
},
{
  "id": "topic-appendix-a-staying-synchronized",
  "level": "1",
  "url": "topic-appendix-a-staying-synchronized.html",
  "type": "Section",
  "number": "4.10",
  "title": "Appendix A",
  "body": " Appendix A   The information in this appendix is only important if you were directed here from , otherwise it may be ignored.   You found in that the main branch in your origin repository was not behind the main branch in the upstream repository. This would have happened if you created your fork and clone after the instructor merged the class pull requests for the Round 1 issues. You can recover from this situation using the commands below.  Ensure that you are in the GitKit-FarmData2 directory then use the following commands:   git switch main    git reset --hard 96d9ecee396a8a6b4bda3b2c787deeec6c353217    git push --force origin main      You should now return to and the main branch in your origin should now be behind the main branch in the upstream.   "
},
{
  "id": "topic-understanding-merge-conflicts",
  "level": "1",
  "url": "topic-understanding-merge-conflicts.html",
  "type": "Section",
  "number": "5.1",
  "title": "Understanding Merge Conflicts",
  "body": " Understanding Merge Conflicts   The exercises in this section provide practice in identifying merge conflicts and resolving them.    Merge Example 1   Consider . This figure shows a feature branch (in the left panel) that is to be merged into the current main branch (in the right panel). The center panel shows the best common ancestor from which both the feature branch and main branch have diverged.  The current main branch contains changes, merged by the maintainers, to fix several bugs that existed in the best common ancestor. The feature branch has been changed to use more descriptive variable names, but has not fixed the bugs.    Example merge conflicts with Best Common Ancestor.   Three panels of code (feature branch, best common ancestor, main branch)         Study the program shown in the main branch of . Then choose the statement below that best describes the computation the program is trying to perform. Note: The Feature Branch and the Best Common Ancestor both contain bugs.     Find the average of a list of numbers.    Correct.      Find the total of a list of numbers.    Consider the last line in the main branch.      Count how many numbers the user enters.    What does the program do besides count the numbers?      None of these.    One of the other answers is correct.      When both the feature branch being merged and the main branch that it is being merged into contain changes with respect to the best common ancestor, those changes can be non-conflicting or conflicting .   Select the statement below that best describes a non-conflicting change .     A non-conflicting change occurs when a part of the code changes in the feature branch or in the main branch but not in both.    Correct.      A non-conflicting change occurs when a part of the code changes in both the feature branch and the main branch.    Review the definitions of non-conflicting and conflicting changes in the class slides.      A non-conflicting change occurs when the best common ancestor is modified.    The best common ancestor cannot be changed, all changes are either in the feature branch or the main branch.      A non-conflicting change occurs when part of the feature branch contains only one change.    You need to consider changes to both the feature branch and the main branch to determine if a change is non-conflicting.     Select the statement below that best describes a conflicting change .     A conflicting change occurs when a part of the code changes in the feature branch or in the main branch but not in both.    Review the definitions of non-conflicting and conflicting changes in the class slides.      A non-conflicting change occurs when a part of the code changes in both the feature branch and the main branch.    Correct.      A conflicting change occurs when the best common ancestor is modified.    The best common ancestor cannot be changed, all changes are either in the feature branch or the main branch.      A conflicting change occurs when a part of the feature branch contains multiple changes.    You need to consider changes to both the feature branch and the main branch to determine if a change is conflicting.      The questions below will now ask you to identify the non-conflicting and conflicting changes that exist in the merge from .   Highlight (by clicking) all of the lines in the main branch and the feature branch that contain non-conflicting changes. Use the example in the course slides as a guide.      Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Non-conflicting changes occur when a part of the code changes in either the feature branch or the main but not both.   Highlight by clicking all of the lines in the main and feature branches that contain conflicting changes. Use the example in the course slides as a guide.      Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Conflicting changes occur when the same part of the code is changed both the feature branch and the main branch.    Select the statement below that best describes why the feature branch in would, or would not, be able to be merged automatically by the project maintainers.     The feature branch cannot be merged automatically because there is a conflicting change.    Correct. The last line contains changes in both main and the feature branch.      The feature branch can be merged automatically because there all of the changes are non-conflicting.    Are you sure there are no conflicting changes?      The feature branch cannot be merged automatically because there are non-conflicting changes.    Non-conflicting changes can (usually) be merged automatically.      It is not possible to tell if the feature branch can be merged automatically.    If there are conflicting changes then the feature branch will not be able to be merged automatically.      The feature branch cannot be merged automatically because there are changes both in main and in the feature branch.    Close. What type of changes prevent automatic merges?      Use the table below to indicate how the feature branch would be merged into the main branch. Each line that contains a change is shown in boldface. Click the change the feature branch or the main branch to indicate the version of the line that will appear in the merged result. The merged result should include all non-conflicting changes and should resolve the conflicting change. The resulting program must perform the desired computation as identified in       Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Select all of the non-conflicting changes and choose the conflicting change that ensures that the program will work correctly.      Merge Example 2    shows another example of a contributor's feature branch that is to be merged into the main branch.  As in the previous example, the right-hand panel shows commits that the maintainers have merged into the main branch to fix a bug that existed in the program. The left-hand panel shows the contributor's feature branch with changes that also fix the bug, but in a different way. The center panel shows the best common ancestor of the feature and main branches.    Example merge conflicts with Best Common Ancestor.   Three panels of code (feature branch, best common ancestor, main branch)         Study the program in . Then choose the statement below that best describes the computation the program is trying to perform. gNote: The ** operator indicates exponentiation, so x**2 computes x squared.     Compute the area of a circle.    Correct.      Find the circumference of a circle.    Close. Notice the use of ** to square the radius r .      Compute the volume of a sphere.    Close, but that formula would use r**3 .      None of these.    One of the other answers is correct.     The main branch fixes the bug in a strange way. So focusing on the feature branch may be easier.    The questions below will now ask you to identify the non-conflicting and conflicting changes that exist in the merge from .   Highlight (by clicking) all of the lines in the main branch and the feature branch that contain non-conflicting changes.      Feature Branch  Best Common Ancestor  main Branch    r=15  r=15  r=15    pi = 3.1415927  pi = 3.14  pi = 3.14    rsq = r**2  rsq = r*2  rsq = r*2    a = pi*rsq  a = pi*rsq  area = pi*(rsq\/2)**2    print a  print a  print area     Non-conflicting changes occur when a part of the code changes in either the feature branch or the main but not both.   Highlight (by clicking) all of the lines (if any) in the main branch and the feature branch that contain conflicting changes.      Feature Branch  Best Common Ancestor  main Branch    r=15  r=15  r=15    pi = 3.1415927  pi = 3.14  pi = 3.14    rsq = r**2  rsq = r*2  rsq = r*2    a = pi*rsq  a = pi*rsq  area = pi*(rsq\/2)**2    print a  print a  print area     Conflicting changes occur when the same part of the code is changed both the feature branch and the main branch.    Select the statement below that best describes why the feature branch in would, or would not, be able to be merged automatically by the project maintainers.     The feature branch can be merged automatically because there all of the changes are non-conflicting.    Correct.      The feature branch cannot be merged automatically because there is a conflicting change.    Are there any conflicting changes?      The feature branch cannot be merged automatically because there are non-conflicting changes.    Non-conflicting changes can (usually) be merged automatically.      It is not possible to tell if the feature branch can be merged automatically.    If there are conflicting changes then the feature branch will not be able to be merged automatically.      The feature branch cannot be merged automatically because there are changes both in main and in the feature branch.    What type of changes prevent automatic merges?      Imagine that the non-conflicting changes you identified in are automatically merged. Select the statement below that best describes the result.     The merged program will not work correctly because the formula for the area will be incorrect.    Correct.      The merged program will work correctly because automatic merge's are guaranteed to produce a correct program.    Look closely at the lines that define rsq and area .      The merged program will not work correctly because an incorrect value of pi will be used.    3.1415927 is a valid approximation of pi.      The merged program will work correctly because rsq is will be correctly computed as r squared instead of r*2 .    Look closely at how the area will be computed.      When both the feature branch and the main branch function correctly, and the merge contains no conflicting changes then the result of an automatic merge will also be correct.    Consider what happened with where there were no conflicting changes.     "
},
{
  "id": "topic-merge-example-1-2-1",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#topic-merge-example-1-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "feature branch best common ancestor "
},
{
  "id": "fig-merge-conflicts-1",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#fig-merge-conflicts-1",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " Example merge conflicts with Best Common Ancestor.   Three panels of code (feature branch, best common ancestor, main branch)   "
},
{
  "id": "ex-merge-conflict-1-computation",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflict-1-computation",
  "type": "Exercise",
  "number": "5.1.1.1",
  "title": "",
  "body": " Study the program shown in the main branch of . Then choose the statement below that best describes the computation the program is trying to perform. Note: The Feature Branch and the Best Common Ancestor both contain bugs.     Find the average of a list of numbers.    Correct.      Find the total of a list of numbers.    Consider the last line in the main branch.      Count how many numbers the user enters.    What does the program do besides count the numbers?      None of these.    One of the other answers is correct.    "
},
{
  "id": "ex-ex-conflict-type",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-ex-conflict-type",
  "type": "Exercise",
  "number": "5.1.1.2",
  "title": "",
  "body": " When both the feature branch being merged and the main branch that it is being merged into contain changes with respect to the best common ancestor, those changes can be non-conflicting or conflicting .   Select the statement below that best describes a non-conflicting change .     A non-conflicting change occurs when a part of the code changes in the feature branch or in the main branch but not in both.    Correct.      A non-conflicting change occurs when a part of the code changes in both the feature branch and the main branch.    Review the definitions of non-conflicting and conflicting changes in the class slides.      A non-conflicting change occurs when the best common ancestor is modified.    The best common ancestor cannot be changed, all changes are either in the feature branch or the main branch.      A non-conflicting change occurs when part of the feature branch contains only one change.    You need to consider changes to both the feature branch and the main branch to determine if a change is non-conflicting.     Select the statement below that best describes a conflicting change .     A conflicting change occurs when a part of the code changes in the feature branch or in the main branch but not in both.    Review the definitions of non-conflicting and conflicting changes in the class slides.      A non-conflicting change occurs when a part of the code changes in both the feature branch and the main branch.    Correct.      A conflicting change occurs when the best common ancestor is modified.    The best common ancestor cannot be changed, all changes are either in the feature branch or the main branch.      A conflicting change occurs when a part of the feature branch contains multiple changes.    You need to consider changes to both the feature branch and the main branch to determine if a change is conflicting.    "
},
{
  "id": "ex-merge-conflict-1",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflict-1",
  "type": "Exercise",
  "number": "5.1.1.3",
  "title": "",
  "body": " The questions below will now ask you to identify the non-conflicting and conflicting changes that exist in the merge from .   Highlight (by clicking) all of the lines in the main branch and the feature branch that contain non-conflicting changes. Use the example in the course slides as a guide.      Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Non-conflicting changes occur when a part of the code changes in either the feature branch or the main but not both.   Highlight by clicking all of the lines in the main and feature branches that contain conflicting changes. Use the example in the course slides as a guide.      Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Conflicting changes occur when the same part of the code is changed both the feature branch and the main branch.  "
},
{
  "id": "ex-merge-conflict-1-can-merge",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflict-1-can-merge",
  "type": "Exercise",
  "number": "5.1.1.4",
  "title": "",
  "body": " Select the statement below that best describes why the feature branch in would, or would not, be able to be merged automatically by the project maintainers.     The feature branch cannot be merged automatically because there is a conflicting change.    Correct. The last line contains changes in both main and the feature branch.      The feature branch can be merged automatically because there all of the changes are non-conflicting.    Are you sure there are no conflicting changes?      The feature branch cannot be merged automatically because there are non-conflicting changes.    Non-conflicting changes can (usually) be merged automatically.      It is not possible to tell if the feature branch can be merged automatically.    If there are conflicting changes then the feature branch will not be able to be merged automatically.      The feature branch cannot be merged automatically because there are changes both in main and in the feature branch.    Close. What type of changes prevent automatic merges?    "
},
{
  "id": "ex-do-merge-1",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-do-merge-1",
  "type": "Exercise",
  "number": "5.1.1.5",
  "title": "",
  "body": " Use the table below to indicate how the feature branch would be merged into the main branch. Each line that contains a change is shown in boldface. Click the change the feature branch or the main branch to indicate the version of the line that will appear in the merged result. The merged result should include all non-conflicting changes and should resolve the conflicting change. The resulting program must perform the desired computation as identified in       Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Select all of the non-conflicting changes and choose the conflicting change that ensures that the program will work correctly.  "
},
{
  "id": "fig-merge-conflicts-2",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#fig-merge-conflicts-2",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": " Example merge conflicts with Best Common Ancestor.   Three panels of code (feature branch, best common ancestor, main branch)   "
},
{
  "id": "ex-merge-conflict-2-computation",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflict-2-computation",
  "type": "Exercise",
  "number": "5.1.2.1",
  "title": "",
  "body": " Study the program in . Then choose the statement below that best describes the computation the program is trying to perform. gNote: The ** operator indicates exponentiation, so x**2 computes x squared.     Compute the area of a circle.    Correct.      Find the circumference of a circle.    Close. Notice the use of ** to square the radius r .      Compute the volume of a sphere.    Close, but that formula would use r**3 .      None of these.    One of the other answers is correct.     The main branch fixes the bug in a strange way. So focusing on the feature branch may be easier.  "
},
{
  "id": "ex-merge-conflict-2",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflict-2",
  "type": "Exercise",
  "number": "5.1.2.2",
  "title": "",
  "body": " The questions below will now ask you to identify the non-conflicting and conflicting changes that exist in the merge from .   Highlight (by clicking) all of the lines in the main branch and the feature branch that contain non-conflicting changes.      Feature Branch  Best Common Ancestor  main Branch    r=15  r=15  r=15    pi = 3.1415927  pi = 3.14  pi = 3.14    rsq = r**2  rsq = r*2  rsq = r*2    a = pi*rsq  a = pi*rsq  area = pi*(rsq\/2)**2    print a  print a  print area     Non-conflicting changes occur when a part of the code changes in either the feature branch or the main but not both.   Highlight (by clicking) all of the lines (if any) in the main branch and the feature branch that contain conflicting changes.      Feature Branch  Best Common Ancestor  main Branch    r=15  r=15  r=15    pi = 3.1415927  pi = 3.14  pi = 3.14    rsq = r**2  rsq = r*2  rsq = r*2    a = pi*rsq  a = pi*rsq  area = pi*(rsq\/2)**2    print a  print a  print area     Conflicting changes occur when the same part of the code is changed both the feature branch and the main branch.  "
},
{
  "id": "ex-merge-conflict-2-can-merge",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflict-2-can-merge",
  "type": "Exercise",
  "number": "5.1.2.3",
  "title": "",
  "body": " Select the statement below that best describes why the feature branch in would, or would not, be able to be merged automatically by the project maintainers.     The feature branch can be merged automatically because there all of the changes are non-conflicting.    Correct.      The feature branch cannot be merged automatically because there is a conflicting change.    Are there any conflicting changes?      The feature branch cannot be merged automatically because there are non-conflicting changes.    Non-conflicting changes can (usually) be merged automatically.      It is not possible to tell if the feature branch can be merged automatically.    If there are conflicting changes then the feature branch will not be able to be merged automatically.      The feature branch cannot be merged automatically because there are changes both in main and in the feature branch.    What type of changes prevent automatic merges?    "
},
{
  "id": "ex-merge-conflict-2-bad-auto",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflict-2-bad-auto",
  "type": "Exercise",
  "number": "5.1.2.4",
  "title": "",
  "body": " Imagine that the non-conflicting changes you identified in are automatically merged. Select the statement below that best describes the result.     The merged program will not work correctly because the formula for the area will be incorrect.    Correct.      The merged program will work correctly because automatic merge's are guaranteed to produce a correct program.    Look closely at the lines that define rsq and area .      The merged program will not work correctly because an incorrect value of pi will be used.    3.1415927 is a valid approximation of pi.      The merged program will work correctly because rsq is will be correctly computed as r squared instead of r*2 .    Look closely at how the area will be computed.    "
},
{
  "id": "ex-merge-conflicts-auto-always-ok",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflicts-auto-always-ok",
  "type": "Exercise",
  "number": "5.1.2.5",
  "title": "",
  "body": " When both the feature branch and the main branch function correctly, and the merge contains no conflicting changes then the result of an automatic merge will also be correct.    Consider what happened with where there were no conflicting changes.  "
},
{
  "id": "topic-confirming-the-merge-conflict",
  "level": "1",
  "url": "topic-confirming-the-merge-conflict.html",
  "type": "Section",
  "number": "5.2",
  "title": "Confirming the Merge Conflict",
  "body": " Confirming the Merge Conflict   While you were working on your Round2 issue your instructor, playing the role of a maintainer, merged some changes into the upstream main . These changes were merged after you created the feature branch for your Round2 issue. This situation is illustrated in .    Conflicting Upstream Changes.   Changes were merged into the upstream main branch that could conflict with changes in the pull request feature branches.     The changes that your instructor merged were specifically designed to create a conflict with the change that you made when you fixed your Round2 issue. Thus, the pull request you made in now contains a conflicting change and therefore cannot be merged automatically.  The activities in the remainder of this section will reinforce your understanding of how the conflict arose, confirm that your main branch is out of synch with the upstream, and that your pull request cannot be merged automatically.      Complete the following tasks that ask about the current situation, which is illustrated in .   Which of the following commits (i.e. which color) in did the instructor add to the upstream main branch after you created the feature branch for your Round2 issue?     Dark Blue    Correct.      Lime Green    The lime green commit is not in the upstream main branch.      Brown    The brown commit is not in the upstream main branch.      Light Blue    The light blue commit was added to the upstream main before the contributors created their feature branches.      Yellow    The yellow commit was added to the upstream main before the contributors created their feature branches.     Look at which commits are in upstream main branch that are not in the contributors' main branches.   Which of the following commits (i.e. which color) in did you create that will create a merge conflict with the upstream main branch?     Dark Blue    The dark blue commit is already in the upstream main branch.      Lime Green    The lime green commit might create a merge conflict, but it is not your commit.      Brown    Correct!      Light Blue    The light blue commit is already in the upstream main branch.      Yellow    The yellow commit is already in the upstream main branch.     Look for a commit in your local repository that might contain changes that could conflict with the changes in the dark blue commit.    If everything is as we saw above, then the pull request that you created for your Round2 issue will contain a merge conflict with the upstream main branch. Let's confirm that it does before going on.   Visit the upstream repo on GitHub, click on the \"Pull requests\" tab.   Find and click on your Round2 pull request.   Scroll down toward the bottom of the pull request.   Which of the following messages do you see?       GitHub message indicating that merging can be performed automatically.       IMPORTANT: You should be seeing that your pull request cannot be merged automatically. Follow the instructions in to fix this problem.   When your pull request cannot be merged automatically, return to this question and continue. See your instructor if you cannot resolve this problem.        GitHub message indicating that there are merge conflicts that must be resolved.      Excellent. Everything is as it should be. Please continue to the next exercise.      I don't see either of the other messages.    If you see a message about GitHub checking if the merge can be performed automatically, wait a few moments for one of the other messages to appear.      We now know that your Round2 pull request contains a merge conflict and cannot be merged automatically. Place the following actions into an order which could have created this merge conflict.     You created a feature branch.    Changes were merged into upstream main.    You fixed your Round2 issue.    You made your Round2 PR.    For a conflict to occur the upstream main branch must contain changes that are not in your feature branch.   When would you have to create your feature branch for the upstream main branch to contain changes that are not in your feature branch.    "
},
{
  "id": "fig-conflicting-upstream-changes",
  "level": "2",
  "url": "topic-confirming-the-merge-conflict.html#fig-conflicting-upstream-changes",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Conflicting Upstream Changes.   Changes were merged into the upstream main branch that could conflict with changes in the pull request feature branches.   "
},
{
  "id": "ex-identifying-commits-that-conflict",
  "level": "2",
  "url": "topic-confirming-the-merge-conflict.html#ex-identifying-commits-that-conflict",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": " Complete the following tasks that ask about the current situation, which is illustrated in .   Which of the following commits (i.e. which color) in did the instructor add to the upstream main branch after you created the feature branch for your Round2 issue?     Dark Blue    Correct.      Lime Green    The lime green commit is not in the upstream main branch.      Brown    The brown commit is not in the upstream main branch.      Light Blue    The light blue commit was added to the upstream main before the contributors created their feature branches.      Yellow    The yellow commit was added to the upstream main before the contributors created their feature branches.     Look at which commits are in upstream main branch that are not in the contributors' main branches.   Which of the following commits (i.e. which color) in did you create that will create a merge conflict with the upstream main branch?     Dark Blue    The dark blue commit is already in the upstream main branch.      Lime Green    The lime green commit might create a merge conflict, but it is not your commit.      Brown    Correct!      Light Blue    The light blue commit is already in the upstream main branch.      Yellow    The yellow commit is already in the upstream main branch.     Look for a commit in your local repository that might contain changes that could conflict with the changes in the dark blue commit.  "
},
{
  "id": "ex-no-automatic-merge-on-github",
  "level": "2",
  "url": "topic-confirming-the-merge-conflict.html#ex-no-automatic-merge-on-github",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": " If everything is as we saw above, then the pull request that you created for your Round2 issue will contain a merge conflict with the upstream main branch. Let's confirm that it does before going on.   Visit the upstream repo on GitHub, click on the \"Pull requests\" tab.   Find and click on your Round2 pull request.   Scroll down toward the bottom of the pull request.   Which of the following messages do you see?       GitHub message indicating that merging can be performed automatically.       IMPORTANT: You should be seeing that your pull request cannot be merged automatically. Follow the instructions in to fix this problem.   When your pull request cannot be merged automatically, return to this question and continue. See your instructor if you cannot resolve this problem.        GitHub message indicating that there are merge conflicts that must be resolved.      Excellent. Everything is as it should be. Please continue to the next exercise.      I don't see either of the other messages.    If you see a message about GitHub checking if the merge can be performed automatically, wait a few moments for one of the other messages to appear.    "
},
{
  "id": "ex-what-created-the-conflict",
  "level": "2",
  "url": "topic-confirming-the-merge-conflict.html#ex-what-created-the-conflict",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": " We now know that your Round2 pull request contains a merge conflict and cannot be merged automatically. Place the following actions into an order which could have created this merge conflict.     You created a feature branch.    Changes were merged into upstream main.    You fixed your Round2 issue.    You made your Round2 PR.    For a conflict to occur the upstream main branch must contain changes that are not in your feature branch.   When would you have to create your feature branch for the upstream main branch to contain changes that are not in your feature branch.  "
},
{
  "id": "topic-synchronizing-with-the-upstream-repository",
  "level": "1",
  "url": "topic-synchronizing-with-the-upstream-repository.html",
  "type": "Section",
  "number": "5.3",
  "title": "Synchronizing with the Upstream Repository",
  "body": " Synchronizing with the Upstream Repository   From the previous section you know that there is a merge conflict between the upstream main branch and your feature branch. Before you can resolve this conflict you will need to get the changes from the upstream main branch into your local and origin main branches.  The process you learned for synchronizing with the upstream in ( and ) will copy the changes in the upstream main branch into your local and origin main branches. This process is illustrated in .    Synchronizing with the upstream.   Using pull and push to synchronize the local and origin main branches with the upstream main branch.     The exercises in the remainder of this section will help you to synchronize your local and origin main branches with the upstream main branch.      To do the synchronization you'll need to have your development environment running.  Click here to open your development environment .  Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use.\" and your browser window will look similar to the following:   The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.     Assuming your feature branch is currently the active branch, arrange the the commands below into the order they would be used to synchronize your main branches with the upstream main branch. Note: Not all commands will be used.     git switch main      git pull upstream main      git push origin main      git pull origin main      git push upstream main     Review and for how to synchronize with the upstream main .   Run the commands that you identified in in the terminal.   Let's, confirm that your origin main branch is now synchronized with the upstream main branch.  Visit your origin repository and ensure that the main branch is active.  Near the top of the page, you should see a message that is similar to one of the following. Select the message that is most similar to what you see.     This branch is up to date with <the upstream>.    Excellent. Just as it should be. Continue on to the next exercise.      This branch xx commits behind <the upstream>.    Uh Oh. It doesn't look like your synchronization worked. Try running the commands from again.      "
},
{
  "id": "fig-synching-upstream-changes-with-conflict",
  "level": "2",
  "url": "topic-synchronizing-with-the-upstream-repository.html#fig-synching-upstream-changes-with-conflict",
  "type": "Figure",
  "number": "5.3.1",
  "title": "",
  "body": " Synchronizing with the upstream.   Using pull and push to synchronize the local and origin main branches with the upstream main branch.   "
},
{
  "id": "ex-restarting-kitclient-for-synching-with-conflicts",
  "level": "2",
  "url": "topic-synchronizing-with-the-upstream-repository.html#ex-restarting-kitclient-for-synching-with-conflicts",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " To do the synchronization you'll need to have your development environment running.  Click here to open your development environment .  Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use.\" and your browser window will look similar to the following:   The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.   "
},
{
  "id": "ex-synch-main-local-upstream",
  "level": "2",
  "url": "topic-synchronizing-with-the-upstream-repository.html#ex-synch-main-local-upstream",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": " Assuming your feature branch is currently the active branch, arrange the the commands below into the order they would be used to synchronize your main branches with the upstream main branch. Note: Not all commands will be used.     git switch main      git pull upstream main      git push origin main      git pull origin main      git push upstream main     Review and for how to synchronize with the upstream main .   Run the commands that you identified in in the terminal.   Let's, confirm that your origin main branch is now synchronized with the upstream main branch.  Visit your origin repository and ensure that the main branch is active.  Near the top of the page, you should see a message that is similar to one of the following. Select the message that is most similar to what you see.     This branch is up to date with <the upstream>.    Excellent. Just as it should be. Continue on to the next exercise.      This branch xx commits behind <the upstream>.    Uh Oh. It doesn't look like your synchronization worked. Try running the commands from again.    "
},
{
  "id": "topic-merging-the-main-branch-into-a-feature-branch",
  "level": "1",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html",
  "type": "Section",
  "number": "5.4",
  "title": "Merging the main Branch into a Feature Branch",
  "body": " Merging the main Branch into a Feature Branch   Your local and origin main branches now contain the changes that were made to the upstream main branch. The next step is to merge the changes from the main branch into your feature branch.    Branch Vocabulary    shows the merge example from the class slides.    Merging the main branch into a feature branch.   Illustration of the main branch being merged into a feature branch.     When two branches are merged the branch containing the changes to be merged is called the source branch , and the branch into which the changes are merged is called the target branch .  When the changes in the source and target branches have been successfully merged a merge commit containing the merged changes is added to the target branch.      Match the branch names to the appropriate term below.    main  Source Branch    feature branch ( hadPig )  Target Branch    Read the introduction to this section.    Which commit (i.e. which color) in is the merge commit created by merging the main branch into the hadPig branch?     Dark blue with a brown ring.    Correct. The dark blue commit in main was merged with the brown commit in the hadPig branch.      Dark blue    The dark blue commit is a commit in the main branch.      Brown    The brown commit is a commit in the hadPig branch.      Pink    The pink commit is a commit in the main branch.      Light blue with a white ring.    The light blue with a white ring is a merge commit in main . Likely from merging a pull request.     Read the introduction to this section and examine .      The git merge Command.   The command git merge <branch name> will attempt to merge the changes in the active branch with the changes in <branch name> .      Imagine that the main branch is the active branch. Select and arrange statements from those listed below such that the main branch will be merged into the hadPig branch as in . Note: Not all statements will be used.     git switch hadPig      git merge main      git merge hadPig      git switch main      To merge the main branch into your feature branch, your feature branch must be the active branch. Let's ensure that your feature branch is the active branch.   Use the git switch <branch> command to make your feature branch the active branch.   Use the git status command to check that your feature branch is now the active branch.    Now that your feature branch is the active branch, give a command that will merge the main branch into your feature branch.         Correct.      You want to merge the main branch into your feature branch, which is the active branch.      Review the format of the git merge command above.      The command you want is in .     Be sure you are using your GitHub origin repository (see ). This clone URL should contain your GitHub username and end in .git .   Now let's try top merge the changes in the main branch into your feature branch.   Run your merge command from in the terminal.   Which of the following statements best describes what happened when you ran your merge command?     The terminal displays a message indicating \"Automatic merge failed; fix conflicts and then commit the result.\"    Excellent! Because there is a merge conflict between the main branch and your feature branch, this is what we expect. Continue to the next exercise.      The \"GNU nano\" editor opens with the first line of text being \"Merge branch 'main' into\" your feature branch.    Uh Oh! Something went wrong. Let's try to fix it.  Press Ctrl-x to exit the nano editor.  Run the command git revert --hard HEAD~1  Go back to and ensure that your pull request contains a conflict.  Then try your merge command again.        Something else happened.    Double check that your merge command from is correct and that you typed it into the terminal correctly.     Which of the following things also happened when you ran your merge command?     The terminal displays a message indicating that there is a \"Merge conflict in README.md.\"    Correct.      The README.md file is opened in the editor.    Correct.      The conflict is automatically resolved.    The conflict cannot be automatically resolved because there is a conflict.      The development environment plays a sad song because there is a conflict.    That would be fun, but unfortunately not.     Look at the output in the terminal and the file that is open in the development environment.     "
},
{
  "id": "fig-merge-main-into-feature",
  "level": "2",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html#fig-merge-main-into-feature",
  "type": "Figure",
  "number": "5.4.1",
  "title": "",
  "body": " Merging the main branch into a feature branch.   Illustration of the main branch being merged into a feature branch.   "
},
{
  "id": "topic-branch-vocabulary-2-3",
  "level": "2",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html#topic-branch-vocabulary-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "source branch target branch merge commit "
},
{
  "id": "ex-name-source-target-branches",
  "level": "2",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html#ex-name-source-target-branches",
  "type": "Exercise",
  "number": "5.4.1.1",
  "title": "",
  "body": " Match the branch names to the appropriate term below.    main  Source Branch    feature branch ( hadPig )  Target Branch    Read the introduction to this section.  "
},
{
  "id": "ex-merge-commit",
  "level": "2",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html#ex-merge-commit",
  "type": "Exercise",
  "number": "5.4.1.2",
  "title": "",
  "body": " Which commit (i.e. which color) in is the merge commit created by merging the main branch into the hadPig branch?     Dark blue with a brown ring.    Correct. The dark blue commit in main was merged with the brown commit in the hadPig branch.      Dark blue    The dark blue commit is a commit in the main branch.      Brown    The brown commit is a commit in the hadPig branch.      Pink    The pink commit is a commit in the main branch.      Light blue with a white ring.    The light blue with a white ring is a merge commit in main . Likely from merging a pull request.     Read the introduction to this section and examine .  "
},
{
  "id": "ex-merge-main-into-had-pig",
  "level": "2",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html#ex-merge-main-into-had-pig",
  "type": "Exercise",
  "number": "5.4.2.1",
  "title": "",
  "body": " Imagine that the main branch is the active branch. Select and arrange statements from those listed below such that the main branch will be merged into the hadPig branch as in . Note: Not all statements will be used.     git switch hadPig      git merge main      git merge hadPig      git switch main    "
},
{
  "id": "ex-make-feature-active",
  "level": "2",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html#ex-make-feature-active",
  "type": "Exercise",
  "number": "5.4.2.2",
  "title": "",
  "body": " To merge the main branch into your feature branch, your feature branch must be the active branch. Let's ensure that your feature branch is the active branch.   Use the git switch <branch> command to make your feature branch the active branch.   Use the git status command to check that your feature branch is now the active branch.  "
},
{
  "id": "ex-merge-main-into-feature-cmd",
  "level": "2",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html#ex-merge-main-into-feature-cmd",
  "type": "Exercise",
  "number": "5.4.2.3",
  "title": "",
  "body": " Now that your feature branch is the active branch, give a command that will merge the main branch into your feature branch.         Correct.      You want to merge the main branch into your feature branch, which is the active branch.      Review the format of the git merge command above.      The command you want is in .     Be sure you are using your GitHub origin repository (see ). This clone URL should contain your GitHub username and end in .git . "
},
{
  "id": "ex-merge-main-into-feature",
  "level": "2",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html#ex-merge-main-into-feature",
  "type": "Exercise",
  "number": "5.4.2.4",
  "title": "",
  "body": " Now let's try top merge the changes in the main branch into your feature branch.   Run your merge command from in the terminal.   Which of the following statements best describes what happened when you ran your merge command?     The terminal displays a message indicating \"Automatic merge failed; fix conflicts and then commit the result.\"    Excellent! Because there is a merge conflict between the main branch and your feature branch, this is what we expect. Continue to the next exercise.      The \"GNU nano\" editor opens with the first line of text being \"Merge branch 'main' into\" your feature branch.    Uh Oh! Something went wrong. Let's try to fix it.  Press Ctrl-x to exit the nano editor.  Run the command git revert --hard HEAD~1  Go back to and ensure that your pull request contains a conflict.  Then try your merge command again.        Something else happened.    Double check that your merge command from is correct and that you typed it into the terminal correctly.     Which of the following things also happened when you ran your merge command?     The terminal displays a message indicating that there is a \"Merge conflict in README.md.\"    Correct.      The README.md file is opened in the editor.    Correct.      The conflict is automatically resolved.    The conflict cannot be automatically resolved because there is a conflict.      The development environment plays a sad song because there is a conflict.    That would be fun, but unfortunately not.     Look at the output in the terminal and the file that is open in the development environment.  "
},
{
  "id": "topic-resolving-a-merge-conflict",
  "level": "1",
  "url": "topic-resolving-a-merge-conflict.html",
  "type": "Section",
  "number": "5.5",
  "title": "Resolving a Merge Conflict",
  "body": " Resolving a Merge Conflict    shows the main branch has committed changes that conflict with what the local branch wants to commit.    Resolving a Merge Conflict   Image illustrating changes merged into the upstream that conflict with a local branch.     This section will walk you through the process of resolving the merge conflict. In you merged the main branch into your feature branch. This created a merge conflict. In this section you will edit the raw merge conflict information to resolve the conflict and then you will stage and commit the merged changes.    Raw Merge Conflict Information   After completing the README.md file should be open in your editor and the raw merge conflict information should be displayed.  If you are not seeing the README.md file open it from the EXPLORER pane. If you are not seeing the merge conflict information, scroll through the README.md file to the location where you made your change. The raw merge conflict information should appear there. If it does not, return to and try to correct the issue.      The editor window for the README.md file displays the raw conflict information that has resulted from the merge. The following tasks ask you some question about this information.   Match the terms below to the descriptions based upon what is displayed in the editor.    Feature branch contents  Appears with a green highlight at the top of the conflict information.    Best common ancestor  Appears with a gray highlight in the middle of the conflict information.    main branch contents  Appears with a blue highlight at the bottom of the conflict information.    Match the terms below to the descriptions based upon what is displayed in the editor.    Left Chevrons <<<<<<<   Indicate the start of the merge conflict information.    Vertical Bars |||||||   Separate the feature branch content from the best common ancestor.    Equal Signs =======  Separate the best common ancestor from the main branch content.    Right Chevrons >>>>>>>   Indicate the end of the merge conflict information.       Resolving the Merge Conflict   Recall that the merge conflict that you are seeing arose because your feature branch and the upstream main branch contain changes to the same part of the file. In this situation, Git is not able to automatically decide which changes to keep or how to combine the changes. This decision must be made by a developer, in this case... by you!  It is possible to resolve merge conflicts by editing the raw merge information, including removing the chevrons and dividers. However, most development environments, including the one you are using, provide special tools to help with the resolution of merge conflicts.  The basic merge tool in your development environment provides four options to assist with resolving merge conflicts. These options appear in the editor just above the merge conflict information as shown in .    The basic merge tool options.   Image illustrating the basic merge tool options of \"Accept Current Change\", \"Accept Incoming Change\", \"Accept Both Changes\", \"Compare Changes\".         Match the option you would choose to perform each of the indicated operations.    Accept Current Change  Accept the changes in your feature branch.    Accept Incoming Change  Accept the changes in the main branch.    Compare the terms used in the merge tool options to the information displayed in the first and last lines of the merge conflict information.    Click the option that will accept the changes in your feature branch.  Choose the description below that best describes What happens?     Only the changes from the feature branch remain.    Correct.      Only the changes from the main branch remain.    Check the editor contents after you click \"Accept Current Change\".      The changes from the main branch and the chevrons remain.    Check the editor contents after you click \"Accept Current Change\".      The changes from the feature branch and the chevrons remain.    Check the editor contents after you click \"Accept Current Change\".     Click \"Accept Current Change\" and check the editor contents.     If you would like to try out the other merge options you can undo your changes by opening the Hamburger menu (☰), clicking on \"Edit\" and choosing \"Undo\".  This basic merge tool is helpful for resolving small uncomplicated merge conflicts. Most development environments also provide more advanced merge tools for working with more complex conflicts. The use of those tools is beyond the goals of this chapter.     Committing the Merged Changes     At this point you have resolved the merge conflict, but the resulting changes have not been committed to your feature branch. In this section you will commit those changes to your feature branch.    Run the git status command in the terminal and use its output to answer the following questions.   Which of the following appear in the output of the git status command and indicate that your merged changes have not yet been committed to your feature branch?     You have unmerged paths.    Correct.      both modified: README.md    Correct.      no changes added to commit    Correct.      All conflicts fixed    Check the output again.      Your branch is behind 'origin'    Check the output again.     Run the git status command and read the output carefully.   Imagine that after you completed the merge you realize that you didn't merge the changes the way you had intended. Which Git command could you use to undo your merge?      git merge --abort     Correct.       git merge --undo     Close. Check the output again.       git undo merge     Check the output again.       git merge revert     Check the output again.     Run the git status command and read the output carefully.   Feel free to try out the git merge --abort command. After you run it, the raw merge conflict information will reappear in the README.md file. Be sure to re-merge the changes from your feature branch before moving on.   From you can see that you now have uncommitted changes. Those changes are the changes you made when resolving the merge conflict. The next step is to commit your changes.  Choose and order the commands that you would use to commit your changes to your local repository. Note: Not all commands will be used.     git stage README.md      git commit -m \"<message>\"      git push origin <branch>      git switch main     See and for a review.    Run the first command from in the terminal. Then run the git status command and examine its output.  What does git status tell you to do to conclude the merge?     use \"git commit\" to conclude merge    Correct. You already knew that, but its good to know that git status provides helpful tips. Use it often!      use \"git pull\" to conclude merge     git pull performs a different function and will not conclude the merge.      use \"git push\" to conclude merge     git push performs a different function and will not conclude the merge.      use \"git restore\" to conclude merge     git restore performs a different function and will not conclude the merge.     Run the git status command and read the output carefully.    Run the second command from in the terminal. Be sure to replace the <message> placeholder with a meaningful commit message. Then use git status and examine the output.  What does git status tell you that indicates that your changes have been committed?     nothing to commit, working tree clean    Correct.      merge complete    True, but that's not the message that is displayed.      changes successfully merged    True, but that's not the message that is displayed     Run the git status command and read the output carefully.     "
},
{
  "id": "fig-resolving-merge-conflict",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#fig-resolving-merge-conflict",
  "type": "Figure",
  "number": "5.5.1",
  "title": "",
  "body": " Resolving a Merge Conflict   Image illustrating changes merged into the upstream that conflict with a local branch.   "
},
{
  "id": "ex-raw-merge-information",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#ex-raw-merge-information",
  "type": "Exercise",
  "number": "5.5.1.1",
  "title": "",
  "body": " The editor window for the README.md file displays the raw conflict information that has resulted from the merge. The following tasks ask you some question about this information.   Match the terms below to the descriptions based upon what is displayed in the editor.    Feature branch contents  Appears with a green highlight at the top of the conflict information.    Best common ancestor  Appears with a gray highlight in the middle of the conflict information.    main branch contents  Appears with a blue highlight at the bottom of the conflict information.    Match the terms below to the descriptions based upon what is displayed in the editor.    Left Chevrons <<<<<<<   Indicate the start of the merge conflict information.    Vertical Bars |||||||   Separate the feature branch content from the best common ancestor.    Equal Signs =======  Separate the best common ancestor from the main branch content.    Right Chevrons >>>>>>>   Indicate the end of the merge conflict information.   "
},
{
  "id": "topic-resolving-the-conflict-2-3",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#topic-resolving-the-conflict-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic merge tool "
},
{
  "id": "fig-basic-merge-conflict-tool",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#fig-basic-merge-conflict-tool",
  "type": "Figure",
  "number": "5.5.2",
  "title": "",
  "body": " The basic merge tool options.   Image illustrating the basic merge tool options of \"Accept Current Change\", \"Accept Incoming Change\", \"Accept Both Changes\", \"Compare Changes\".   "
},
{
  "id": "ex-merge-tool-options",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#ex-merge-tool-options",
  "type": "Exercise",
  "number": "5.5.2.1",
  "title": "",
  "body": " Match the option you would choose to perform each of the indicated operations.    Accept Current Change  Accept the changes in your feature branch.    Accept Incoming Change  Accept the changes in the main branch.    Compare the terms used in the merge tool options to the information displayed in the first and last lines of the merge conflict information.  "
},
{
  "id": "ex-accept-current-change",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#ex-accept-current-change",
  "type": "Exercise",
  "number": "5.5.2.2",
  "title": "",
  "body": " Click the option that will accept the changes in your feature branch.  Choose the description below that best describes What happens?     Only the changes from the feature branch remain.    Correct.      Only the changes from the main branch remain.    Check the editor contents after you click \"Accept Current Change\".      The changes from the main branch and the chevrons remain.    Check the editor contents after you click \"Accept Current Change\".      The changes from the feature branch and the chevrons remain.    Check the editor contents after you click \"Accept Current Change\".     Click \"Accept Current Change\" and check the editor contents.  "
},
{
  "id": "ex-merged-git-status",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#ex-merged-git-status",
  "type": "Exercise",
  "number": "5.5.3.1",
  "title": "",
  "body": " Run the git status command in the terminal and use its output to answer the following questions.   Which of the following appear in the output of the git status command and indicate that your merged changes have not yet been committed to your feature branch?     You have unmerged paths.    Correct.      both modified: README.md    Correct.      no changes added to commit    Correct.      All conflicts fixed    Check the output again.      Your branch is behind 'origin'    Check the output again.     Run the git status command and read the output carefully.   Imagine that after you completed the merge you realize that you didn't merge the changes the way you had intended. Which Git command could you use to undo your merge?      git merge --abort     Correct.       git merge --undo     Close. Check the output again.       git undo merge     Check the output again.       git merge revert     Check the output again.     Run the git status command and read the output carefully.  "
},
{
  "id": "ex-stage-and-merge-changes-cmds",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#ex-stage-and-merge-changes-cmds",
  "type": "Exercise",
  "number": "5.5.3.2",
  "title": "",
  "body": " From you can see that you now have uncommitted changes. Those changes are the changes you made when resolving the merge conflict. The next step is to commit your changes.  Choose and order the commands that you would use to commit your changes to your local repository. Note: Not all commands will be used.     git stage README.md      git commit -m \"<message>\"      git push origin <branch>      git switch main     See and for a review.  "
},
{
  "id": "ex-stage-merged-changes",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#ex-stage-merged-changes",
  "type": "Exercise",
  "number": "5.5.3.3",
  "title": "",
  "body": " Run the first command from in the terminal. Then run the git status command and examine its output.  What does git status tell you to do to conclude the merge?     use \"git commit\" to conclude merge    Correct. You already knew that, but its good to know that git status provides helpful tips. Use it often!      use \"git pull\" to conclude merge     git pull performs a different function and will not conclude the merge.      use \"git push\" to conclude merge     git push performs a different function and will not conclude the merge.      use \"git restore\" to conclude merge     git restore performs a different function and will not conclude the merge.     Run the git status command and read the output carefully.  "
},
{
  "id": "ex-commit-merged-changes",
  "level": "2",
  "url": "topic-resolving-a-merge-conflict.html#ex-commit-merged-changes",
  "type": "Exercise",
  "number": "5.5.3.4",
  "title": "",
  "body": " Run the second command from in the terminal. Be sure to replace the <message> placeholder with a meaningful commit message. Then use git status and examine the output.  What does git status tell you that indicates that your changes have been committed?     nothing to commit, working tree clean    Correct.      merge complete    True, but that's not the message that is displayed.      changes successfully merged    True, but that's not the message that is displayed     Run the git status command and read the output carefully.  "
},
{
  "id": "topic-updating-your-pull-request",
  "level": "1",
  "url": "topic-updating-your-pull-request.html",
  "type": "Section",
  "number": "5.6",
  "title": "Updating Your Pull Request",
  "body": " Updating Your Pull Request   At this point you have resolved the merge conflict and committed the changes to the feature branch in your local repository. What is left is to push that branch to your origin . When you do so, GitHub will automatically update your pull request to the upstream for that branch.      Give the command that will push your modified feature branch to your origin .         Thank you.      It looks like you are trying to push to the upstream. Try pushing to your origin instead.      It looks like you are pushing the main branch. Try pushing your feature branch.      Review the git push command in .       introduced the command for pushing a feature branch to your origin.       Use your command from to push your feature branch to your origin.   Which of the following pieces of information appear in the terminal output from your command?     The URL of your origin repository.    Correct.      The name of the feature branch that you pushed.    Correct.      A bunch of information about \"objects\".    Correct.      The name of the file that was changed.    Double check the output.      The URL of the upstream repository.    Are you sure it's not your origin repository?      None of these.    Double check the command you used to push your feature branch.     Look closely at the output from your command in the terminal.    Now that you've resolved the merge conflict and pushed the result to GitHub, it should be possible for the maintainers to automatically merge your pull request. Let's check!   Visit the upstream repo on GitHub, click on the \"Pull requests\" tab.   Find and click on your Round2 pull request.   Scroll down toward the bottom of the pull request.   Which of the following messages do you see?       GitHub message indicating that merging can be performed automatically.      Congratulations! You successfully resolved the merge conflict! Please continue to the next exercise.        GitHub message indicating that there are merge conflicts that must be resolved.      Uh oh! Something didn't work. Let's try to fix it.  Run the command git revert --hard HEAD~1  Go back to , merge main into your feature branch and try again to resolve the conflict.        I don't see either of the other messages.    If you see a message about GitHub checking if the merge can be performed automatically, wait a few moments for one of the other messages to appear.      "
},
{
  "id": "ex-push-merge-resolution-cmd",
  "level": "2",
  "url": "topic-updating-your-pull-request.html#ex-push-merge-resolution-cmd",
  "type": "Exercise",
  "number": "5.6.1",
  "title": "",
  "body": " Give the command that will push your modified feature branch to your origin .         Thank you.      It looks like you are trying to push to the upstream. Try pushing to your origin instead.      It looks like you are pushing the main branch. Try pushing your feature branch.      Review the git push command in .       introduced the command for pushing a feature branch to your origin.  "
},
{
  "id": "ex-push-merge-resolution",
  "level": "2",
  "url": "topic-updating-your-pull-request.html#ex-push-merge-resolution",
  "type": "Exercise",
  "number": "5.6.2",
  "title": "",
  "body": "    Use your command from to push your feature branch to your origin.   Which of the following pieces of information appear in the terminal output from your command?     The URL of your origin repository.    Correct.      The name of the feature branch that you pushed.    Correct.      A bunch of information about \"objects\".    Correct.      The name of the file that was changed.    Double check the output.      The URL of the upstream repository.    Are you sure it's not your origin repository?      None of these.    Double check the command you used to push your feature branch.     Look closely at the output from your command in the terminal.  "
},
{
  "id": "ex-pull-request-upstream",
  "level": "2",
  "url": "topic-updating-your-pull-request.html#ex-pull-request-upstream",
  "type": "Exercise",
  "number": "5.6.3",
  "title": "",
  "body": " Now that you've resolved the merge conflict and pushed the result to GitHub, it should be possible for the maintainers to automatically merge your pull request. Let's check!   Visit the upstream repo on GitHub, click on the \"Pull requests\" tab.   Find and click on your Round2 pull request.   Scroll down toward the bottom of the pull request.   Which of the following messages do you see?       GitHub message indicating that merging can be performed automatically.      Congratulations! You successfully resolved the merge conflict! Please continue to the next exercise.        GitHub message indicating that there are merge conflicts that must be resolved.      Uh oh! Something didn't work. Let's try to fix it.  Run the command git revert --hard HEAD~1  Go back to , merge main into your feature branch and try again to resolve the conflict.        I don't see either of the other messages.    If you see a message about GitHub checking if the merge can be performed automatically, wait a few moments for one of the other messages to appear.    "
},
{
  "id": "topic-extra-practice-merging",
  "level": "1",
  "url": "topic-extra-practice-merging.html",
  "type": "Section",
  "number": "5.7",
  "title": "Extra Practice",
  "body": " Extra Practice   This section is optional but will provide you with more practice with Git, GitHub and with resolving merge conflicts if you would like it.      To do the extra practice you'll need to have your development environment running.  Click here to open your development environment .  Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use.\" and your browser window will look similar to the following:   The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.     The upstream repository contains a branch created just for this extra practice. This branch was created so that it contains some pre-made conflicts with the upstream main branch.   Use the following command to get this feature branch from the upstream into your local repo: git fetch upstream merge-conflict-practice    Run the git branch -a command in the terminal to list all of the branches known to your local repository.  Which of the following branches are listed?      main     Correct.       remotes\/upstream\/merge-conflict-practice     Correct.       development     Are you sure this branch exists?       beta     Are you sure this branch exists?     If you do not see the remotes\/upstream\/merge-conflict-practice branch, try the git fetch command again.   At this point you should think of the merge-conflict-practice branch as a feature branch that you created from your main and then made some changes that resulted in conflicts with the upstream main branch. Thinking of the merge-conflict-practice branch this way leaves you at the point where you are trying to merge the modified upstream main into your feature branch as you did in ).   Assuming that your main branch is active, select and order statements that will make the merge-conflict-practice branch active and then merge the main branch into it. Note: not all commands will be used.     git switch merge-conflict-practice      git merge main      git merge merge-conflict-practice      git switch main     Review for how to merge main into a feature branch.    Merging the main branch into the merge-conflict-practice branch will create some conflicts for you to resolve.   Execute the commands you selected in to perform the merge.  In which file were the merge conflicts created?      README.md     Correct.       ONBOARDING.md     Check the hint.       INSTALL.md     Check the hint.       LICENSE.md     Check the hint.       CONTRIBUTING.md     Check the hint.     The file containing the conflicts should have opened in the editor automatically when you performed the git merge operation.   How many merge conflicts were created?     1    Correct.      2    Check the hint.      3    Check the hint.      More than 3.    Check the hint.     Examine the README.md file that opened when you performed the merge operation. Look for places where raw merge conflict information appears.    Choose and order the steps below to describe the sequence of things that you will do to resolve the merge conflicts that were created.    Edit the merge conflict information.     git stage README.md      git commit -m \"<message>\"      git push origin merge-conflict-practice     Create a pull request to the upstream.     Carry out the steps you identified above in and give a link to your pull request.         Thank you.      Be sure that your URL is from your pull request to the upstream repository.      Review sections and .    "
},
{
  "id": "ex-restarting-kitclient-for-extra-practice",
  "level": "2",
  "url": "topic-extra-practice-merging.html#ex-restarting-kitclient-for-extra-practice",
  "type": "Exercise",
  "number": "5.7.1",
  "title": "",
  "body": " To do the extra practice you'll need to have your development environment running.  Click here to open your development environment .  Please be patient as this can take a few minutes. When the development environment is ready you will see the message \"Kit development environment is ready for use.\" and your browser window will look similar to the following:   The GitKit Development Environment. The development environment is ready when you see the \"Kit development environment is ready for use\" message.   "
},
{
  "id": "ex-extra-practice-merging-fetch-repo",
  "level": "2",
  "url": "topic-extra-practice-merging.html#ex-extra-practice-merging-fetch-repo",
  "type": "Exercise",
  "number": "5.7.2",
  "title": "",
  "body": " The upstream repository contains a branch created just for this extra practice. This branch was created so that it contains some pre-made conflicts with the upstream main branch.   Use the following command to get this feature branch from the upstream into your local repo: git fetch upstream merge-conflict-practice    Run the git branch -a command in the terminal to list all of the branches known to your local repository.  Which of the following branches are listed?      main     Correct.       remotes\/upstream\/merge-conflict-practice     Correct.       development     Are you sure this branch exists?       beta     Are you sure this branch exists?     If you do not see the remotes\/upstream\/merge-conflict-practice branch, try the git fetch command again.  "
},
{
  "id": "ex-extra-practice-merging-active-branch",
  "level": "2",
  "url": "topic-extra-practice-merging.html#ex-extra-practice-merging-active-branch",
  "type": "Exercise",
  "number": "5.7.3",
  "title": "",
  "body": " Assuming that your main branch is active, select and order statements that will make the merge-conflict-practice branch active and then merge the main branch into it. Note: not all commands will be used.     git switch merge-conflict-practice      git merge main      git merge merge-conflict-practice      git switch main     Review for how to merge main into a feature branch.  "
},
{
  "id": "ex-extra-practice-do-merge",
  "level": "2",
  "url": "topic-extra-practice-merging.html#ex-extra-practice-do-merge",
  "type": "Exercise",
  "number": "5.7.4",
  "title": "",
  "body": " Merging the main branch into the merge-conflict-practice branch will create some conflicts for you to resolve.   Execute the commands you selected in to perform the merge.  In which file were the merge conflicts created?      README.md     Correct.       ONBOARDING.md     Check the hint.       INSTALL.md     Check the hint.       LICENSE.md     Check the hint.       CONTRIBUTING.md     Check the hint.     The file containing the conflicts should have opened in the editor automatically when you performed the git merge operation.   How many merge conflicts were created?     1    Correct.      2    Check the hint.      3    Check the hint.      More than 3.    Check the hint.     Examine the README.md file that opened when you performed the merge operation. Look for places where raw merge conflict information appears.  "
},
{
  "id": "ex-extra-practice-resolving-conflicts",
  "level": "2",
  "url": "topic-extra-practice-merging.html#ex-extra-practice-resolving-conflicts",
  "type": "Exercise",
  "number": "5.7.5",
  "title": "",
  "body": " Choose and order the steps below to describe the sequence of things that you will do to resolve the merge conflicts that were created.    Edit the merge conflict information.     git stage README.md      git commit -m \"<message>\"      git push origin merge-conflict-practice     Create a pull request to the upstream.   "
},
{
  "id": "ex-extra-practice-merging-do-it",
  "level": "2",
  "url": "topic-extra-practice-merging.html#ex-extra-practice-merging-do-it",
  "type": "Exercise",
  "number": "5.7.6",
  "title": "",
  "body": " Carry out the steps you identified above in and give a link to your pull request.         Thank you.      Be sure that your URL is from your pull request to the upstream repository.      Review sections and .  "
},
{
  "id": "topic-git-command-summary-merging",
  "level": "1",
  "url": "topic-git-command-summary-merging.html",
  "type": "Section",
  "number": "5.8",
  "title": "Git Command Summary",
  "body": " Git Command Summary   It will take a while for this process and all of the commands to become a natural part of the way you work. Until that happens it is often useful to have a short concise cheat sheet of the command for accomplishing each task.      Match the tasks on the right with the appropriate git command listed on the left. The <...> notation indicates parameters that are needed to customize each use.    git switch <branch>  Change the active branch.    git pull upstream main  Synchronize the local main branch with the upstream main branch.    git push origin main  Synchronize the origin main branch with the local main branch.    git merge <source>  Add changes to source branch into the active branch    git stage <file>  Indicate that changes to a file should be included in the next commit.    git commit -m \"<message>\"  Add staged changes to the active branch.    git push origin \"<branch>\"  Copy the named branch to your origin repository.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.    "
},
{
  "id": "ex-git-commands-summary-merging",
  "level": "2",
  "url": "topic-git-command-summary-merging.html#ex-git-commands-summary-merging",
  "type": "Exercise",
  "number": "5.8.1",
  "title": "",
  "body": " Match the tasks on the right with the appropriate git command listed on the left. The <...> notation indicates parameters that are needed to customize each use.    git switch <branch>  Change the active branch.    git pull upstream main  Synchronize the local main branch with the upstream main branch.    git push origin main  Synchronize the origin main branch with the local main branch.    git merge <source>  Add changes to source branch into the active branch    git stage <file>  Indicate that changes to a file should be included in the next commit.    git commit -m \"<message>\"  Add staged changes to the active branch.    git push origin \"<branch>\"  Copy the named branch to your origin repository.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.  "
},
{
  "id": "topic-gitkit-feedback-merging",
  "level": "1",
  "url": "topic-gitkit-feedback-merging.html",
  "type": "Section",
  "number": "5.9",
  "title": "GitKit Feedback",
  "body": " GitKit Feedback   To help us improve this chapter for future semesters please consider clicking this link to complete a short survey which should take approximately 5 minutes to complete.  Thank you for your time and assistance, it is greatly appreciated!    "
},
{
  "id": "topic-gitkit-post-survey",
  "level": "1",
  "url": "topic-gitkit-post-survey.html",
  "type": "Section",
  "number": "5.10",
  "title": "GitKit Post-Survey",
  "body": " GitKit Post-Survey   The GitKit was created as part of a larger research project to understand what computing students think and know about open source tools and techniques. The the post-survey linked below, ask questions that will help the GitKit research team better understand what students think and know after completing the GitKit. Your completion of the post-survey is optional. Your responses are anonymous and will be shared only with the GitKit research team.  Click to complete the 2-3 minute post-survey.   The post-survey have been approved by the Institutional Review Board (IRB) at Western New England University. If you have any questions about this study, you may contact either: Faculty contact: Dr. Ellis (ellis@wne.edu) Professor, Computer Science and Information Technology department, Western New England University, or IRB contact: Dr. Jess Carlson, Professor of Psychology, jessica.outhouse@wne.edu.  Thank you for your time and assistance, it is greatly appreciated!   "
},
{
  "id": "topic-appendix-a-merge-conflicts",
  "level": "1",
  "url": "topic-appendix-a-merge-conflicts.html",
  "type": "Section",
  "number": "5.11",
  "title": "Appendix A",
  "body": " Appendix A   Skip this section if you were not directed here from .  If you were directed here from , then the pull request you created for your Round2 issue is showing that it can be merged automatically. The most common reason that this happens is that you synchronized your local and origin main branches after the instructor merged the conflicting changes into the upstream main branch. This could have happened if you did not complete the previous assignment on time. The instructions in this section will help you to resolve that issue but will require a little additional work on your part.      Ensure that you are in your local repository in a Terminal. Use the following commands to restore your main branch to the state before the conflicts were introduced:  git switch main  git reset --hard HEAD~1    You should see output similar to:  HEAD is now at …      You will now need to repeat the steps you used to fix your Round2 issue:  make a new feature branch  switch to your feature branch  make the changes necessary to address your Round2 issue  stage and commit your changes to your feature branch  Push your feature branch to your origin  Make a pull request to the upstream for your new feature branch  When you look at this pull request it should indicate that it cannot be merged automatically.        Return to and continue with the exercise.    "
},
{
  "id": "ex-restore-main",
  "level": "2",
  "url": "topic-appendix-a-merge-conflicts.html#ex-restore-main",
  "type": "Exercise",
  "number": "5.11.1",
  "title": "",
  "body": " Ensure that you are in your local repository in a Terminal. Use the following commands to restore your main branch to the state before the conflicts were introduced:  git switch main  git reset --hard HEAD~1    You should see output similar to:  HEAD is now at …    "
},
{
  "id": "ex-fix-round2",
  "level": "2",
  "url": "topic-appendix-a-merge-conflicts.html#ex-fix-round2",
  "type": "Exercise",
  "number": "5.11.2",
  "title": "",
  "body": " You will now need to repeat the steps you used to fix your Round2 issue:  make a new feature branch  switch to your feature branch  make the changes necessary to address your Round2 issue  stage and commit your changes to your feature branch  Push your feature branch to your origin  Make a pull request to the upstream for your new feature branch  When you look at this pull request it should indicate that it cannot be merged automatically.      "
},
{
  "id": "topic-appendix-a-merge-conflicts-3-4",
  "level": "2",
  "url": "topic-appendix-a-merge-conflicts.html#topic-appendix-a-merge-conflicts-3-4",
  "type": "Exercise",
  "number": "5.11.3",
  "title": "",
  "body": " Return to and continue with the exercise.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

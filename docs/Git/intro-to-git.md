---
sidebar_position: 1
---

# Introduction to Version control and Git
Version control came out of a need to retain one's previous and current work. In software development, version control systems are important because you could use them to save the different versions of your work and collaborate with others. Git is an example of a version control system. As a developer, you will need git to store and share your code whenever you desire.
In this section, you will learn about version control systems and git.


## Introduction to Version control systems
So what is a version control system?
As I mentioned earlier, a version control system helps you to save different versions of your work and collaboration. Essentially, a version control system is a software tool that helps you track changes to your code over time. It allows you to revert to previous versions of your code, and collaborate with others on the same project. 


[According to the git document](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control), there are three types of version control systems and they are:


- Local version control system
- Centralised version control system 
- Distributed version control system 


### Local version control system 
As the name implies, this runs on a local machine. So it saves the changes to your file on your machine and you can get a previous version of your file when you want to.
Some examples of these local version control systems are Revision Control System (RCS), and Source Code Control System (SCSS).


### Centralised version control system
Local version control systems are limited and do not offer many benefits like collaboration and this is where a centralised VCS comes in. 
A centralised version control system stores all of your files including the changes on a central server. 


When you use a CVCS, you will have a local copy of the repository on your computer. This copy is called a working copy. You can make changes to your code in your working copy, and then you can commit those changes to the central repository.


When you commit your changes, the CVCS will store a snapshot of your code in the central repository. This snapshot will include the changes you made, as well as the time and date of the commit, and the name of the person who made the commit.
Collaboration is possible in CVCS because other users can download the latest version of the code from the central repository. 
A CVCS is ideal for small projects and also if the central server is down then the files become inaccessible.
Some examples of CVCS are Subversion and Perforce.


### Distributed version control system
Distributed version control systems are ideal for all kinds of projects both large and small. This system consists of multiple servers which stores a repository history and every other detail about it. When developers are collaborating on a project, each developer will have a copy of the repository including every detail on their own computer. If there is a server failure, then when the server comes back up, a computer could easily send a copy of the repository lost previously. This is technically the best among all version control systems. Examples of DVCSs are Git and Mercurial. Git is a popular example of DVCS and that is what you will study in the remaining part of this doc.


## Introduction to Git
Git is a distributed version control system which was developed by Linus Torvalds (founder of Linux) out of a need to build a better and faster version control system for the Linux kernel development in the year 2005.
Git is a free and open source software available on major operating systems.


### How Git works
Git works by storing a history of all changes that have been made to a project. This history is called a repository. The repository is divided into two parts: the working tree and the staging area. The working tree is the current state of the project, and the staging area is a temporary holding area for changes that you want to commit to the repository.


When you make a change to a file in the working tree, Git does not actually change the file. Instead, it creates a snapshot of the file before the change was made. This snapshot is called a commit. When you commit a change, Git stores the snapshot in the repository, along with a message describing the change.


You can also create branches in a Git repository. A branch is a copy of the repository that is independent of the main branch. This allows you to work on different features of a project without affecting the main branch. When you are finished working on a feature, you can merge the branch back into the main branch.


### Why Git?
Git is one example of a DVCS and you might be wondering why you should use git. 
Well, git is very popular and common to find among developers for a good reason - it is easy to learn, that's not all. 
- It is efficient for both small and large projects.
- It enables collaboration - even remote collaboration.
- It also allows different workflows with different projects.


### Getting started with Git
So to set up git and start using it, you need to install it. You can [install git using this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). 
After installing, run this command to confirm;
```
git --version
```
After running that, you need to set a username and email address on git. You can do that with the `git config` command.
```
git config --global user.name "<your_username>"


git config --global user.email "<your_emailaddress>"
```


That should set your username and email address.
You can also confirm it with `git config --list`


**Creating a simple project**
Now, we are going to create a simple project on Git. 
1. Create a project folder.
2. Open a command line/terminal on your computer or you can use the terminal on VSCode.
3. Navigate to the folder on the command line using `cd name-of-project-folder`.
4. Initialise git in the project using `git init`.
5. Run `git status` to confirm the status of git in the project.
Voila! That's it, you have played around with git.
In the next doc page, you will use git to push your projects to a git service hub like GitHub. See you there!

Department Website Project
Welcome! This guide provides a simple, step-by-step process for updating the department website. Please follow these instructions to ensure your changes are saved correctly.

The Golden Rule: Always Work on the dev Branch
To protect the live website, we make all our changes on a separate "development" branch called dev. Once the changes are approved, they are moved to the main branch, which updates the live site.

Never make changes directly on the main branch.

Step 1: Get the Latest Version and Switch to the dev Branch
Before you start working, run these two commands. This makes sure you have the most recent files and are working in the correct place.

# Get the latest updates
git pull origin

# Switch to the development branch
git checkout dev

Step 2: Make Your Changes
Now you can edit, add, or delete any files you need to. Make all your desired changes to the website content.

Step 3: Save and Upload Your Changes
Once you are happy with your changes, you need to save them to GitHub. Run these three commands one by one.

1. Add your files:

git add .

2. Describe your change: (Replace "Updated the faculty page" with a brief description of your work)

git commit -m "Updated the faculty page"

3. Upload your changes:

git push origin dev

And that's it! Your changes have been saved to the dev branch. The website manager will then review them and merge them into the live site.

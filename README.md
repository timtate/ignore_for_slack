# Ignore for Slack
In-browser script to ignore a user in Slack
This will not work in the desktop app, or the mobile app, but if you run Slack in your browser, you might find it useful.
This will not block a user across Slack teams, so if the person is in more than one team that you're also in, you'll have to apply this for each team.

To use:
Right-click on the user icon of the user you'd like to ignore, and select "Inspect Element".
In the Element Inspector, look for an element with the data-member-id attribute. It will start with a U, like U03CGXYTN.
Replace the member_id value the script with this ID.
Run the script when you visit your Slack team (more specific instructions to come)

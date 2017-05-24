angular.module('notesApp')
  .service('mainSrvr', function($scope){

      var notesObj = [
        {
          title: "Sunday Session",
          date: "5/13/17",
          note: `
            JS History 1: 7-20. Invite the young men to look for truths we can learn from Joseph’s experience

            -God and Christ appear after Satan has a hold on Joseph Smith. Because of this we know that God is aware of us at all time, even when we are not praying.

            -God’s power is greater than Satan’s
            -God and Christ are two separate beings.

            -They know us by name, they know us personally.

            -It’s important for us to have personal prayer to seek answers for ourselves.


            Invite the young men to write down some of the blessings they have received because of the First Vision

            read the last 10 paragraphs of President Dieter F. Uchtdorf’s talk “The Fruits of the First Vision.”
            `
        },
        {
          title: "Christ Centered Home",
          date: "12/17/16",
          note: `
            -Ask the boys if they remember what last weeks lesson was about.
            -Ask who is the biggest sports fan in the room? then have them describe what they’re perfect home would be like. What would they feel there? How would it be different if it was a Christ-centered home?
            -Read Mosiah 4:14-15, make a list of principles to help establish a Christ-centered home.
            -Show video
            -Read D&C 88:119, make a list of principles for a righteous home.
            	-Read Nephi 1:1, Enos 1:1-3, Mosiah 27:14, what do you notice about all of 	these scriptures?
            	-what examples of these have you seen?
            -What are additional traits that fathers have that make a Christ-centered home?
            -Read “for peace at home” divide 25 paragraphs, have them draw pictures of what to do for a Christ-centered home.
            -“Please Help My Husband Understand” from Elder David A. Bednar’s talk “The Powers of Heaven.”
          `
        },
        {
          title: "Second Sunday Lession",
          date: "12/10/16",
          note: `
             -What would you write to a non-member about the church and why you believe it’s true?
            -compare the missionary stories of ammon and corianton
            - Elder Bednar’s talk “Come and See” 0:00-? & 9:00-14:00  levi’s response to the tree of life was to share it with his family
            	-why should we/would we want to share the gospel? (to heal spiritual wounds)
            -Give an example of a name that you wrote down on your list, why are they on your list?
            -Share the story of the puzzle pieces

            Operate forklifts
            Ensure shipments of warehouse products
            Inject, maintain, and correct data values in database
          `
        },
      ]

      this.getNotes = function(){
        return notesObj;
      }

  })

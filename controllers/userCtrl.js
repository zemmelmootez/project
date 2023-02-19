const User = require('../models/userSchema');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Feedback=require('../models/userSchema')

const userCtrl = {
    register: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ error: errors.mapped() })
            const { name, email, password } = req.body
            const user = await User.findOne({ email });
            if (user) return res.status(400).json({ msg: "email already exist !" });
            const hash = await bcrypt.hash(password, 10);
            const newUser = new User({ name, email, password: hash });
            const registredUser = await newUser.save()
            res.status(200).json({ msg: 'register success ! ' })
            const payload = {
                id: registredUser._id
            }
            const accessToken = await jwt.sign(payload, 'secret token')
            res.json(accessToken)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    login: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ error: errors.mapped() })
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) return res.status(400).json({ msg: "user does not exist ! register before" })
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Wrong password" })
            const payload = {
                id: user._id
            }
            const accessToken = await jwt.sign(payload, 'secret token')
            res.json({ accessToken, role: user.role, name: user.name })

        }
        catch (error) {
            return res.status(500).json({ msg: error.message })

        }


    },
    getUserProfile: async (req, res) => {
        try {
            const user = await User.findById(req.user.id)
            res.json(user)
        } catch (error) {
            return res.status(500).json({ msg: error.message })

        }
    },   deleteUser: async (req, res) => {
        try {
            const { name } = req.body;
            const deletedUser = await User.findOneAndDelete({ name });
            if (!deletedUser) return res.status(400).json({ msg: "user does not exist" });
            res.status(200).json({ msg: "user deleted successfully" });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getNumberOfUsers: async (req, res) => {
        try {
            const count = await User.countDocuments();
            res.json({ count });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },getNumberOfFeedbacks: async (req, res) => {
        try {
            const users = await User.find({});
            let numberOfFeedbacks = 0;
            users.forEach(user => {
              user.feedbacks.forEach(feedback => {
                if (feedback.text) {
                  numberOfFeedbacks++;
                }
              });
            });
            res.json({numberOfFeedbacks}) ;
          } catch (err) {
            console.error(err);
          }
        }
    ,
    showName : async (req, res) => {
        try {
          const users = await User.find({});
      
          const usersWithFeedbacks = users.map(user => {
            return {
              name: user.name,
              feedbackCount: user.feedbacks.length
            };
          });
      
          res.json({ usersWithFeedbacks });
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      },      
    addFeedback: async (req, res) => {
        try {
            console.log(req.body);
            const { email, feedback, feedbacktype } = req.body;
            console.log(feedbacktype);
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ msg: 'User not found' });
            /*  user.feedbacks.push({ text: feedback }); */
         
            user.feedbacks.push({ text: feedback, visibility: feedbacktype })
            const updatedUser = await user.save();
            res.json(updatedUser);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
                        
        showFeedbacks: async (req, res) => {
        try {
            const users = await User.find({ "feedbacks.text": { $ne: "" }, "feedbacks.visibility": "public" });
            const feedbacks = [];
            users.forEach(user => {
                user.feedbacks.forEach(feedback => {
                    if (feedback.text !== "" && feedback.visibility === "public") {
                        feedbacks.push({ name: user.name, feedback: feedback.text, updatedAt: feedback.updatedAt ,id:feedback._id, likes:feedback.likes,dislikes:feedback.dislikes,parentId:user.id ,likesBy:feedback.likesBy,dislikesBy:feedback.dislikesBy});
                    }
                });
            });
            res.json({ feedbacks });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    updateFeedback : async (req, res) => {
        try {
            const email = req.body.email;
            const feedbackId = req.body.feedbackId;
            const newFeedback = req.body.newFeedback;
    
            const user = await User.findOne({ email: email });
            if (!user) return res.status(400).send({ msg: 'User not found' });
    
            const feedback = user.feedbacks.id(feedbackId);
            if (!feedback) return res.status(400).send({ msg: 'Feedback not found' });
    
            feedback.text = newFeedback;
            await user.save();
    
            return res.status(200).send({ msg: 'Feedback updated successfully' });
        } catch (error) {
            return res.status(500).send({ msg: error.message });
        }
    },
    deleteFeedback : async (req, res) => {
        try {
            console.log(req.body);
            const email = req.body.email;
            const feedbackId = req.body.feedbackId;
            console.log(email);
            console.log(feedbackId)
            const user = await User.findOne({ email: email });
            if (!user) return res.status(400).send({ msg: 'User not found' });
    
            const feedback = user.feedbacks.id(feedbackId);
            if (!feedback) return res.status(400).send({ msg: 'Feedback not found' });
    
            feedback.remove();
            await user.save();
    
            return res.status(200).send({ msg: 'Feedback deleted successfully' });
        } catch (error) {
            return res.status(500).send({ msg: error.message });
        }
    },
    showall: async (req, res) => {
        try {
            const users = await User.find({ "feedbacks.text": { $ne: "" }});
            const feedbacks = [];
            users.forEach(user => {
                user.feedbacks.forEach(feedback => {
                    if (feedback.text !== "" ) {
                        feedbacks.push({ name: user.name, feedback: feedback.text,feedbacktype:feedback.visibility,updatedAt: feedback.updatedAt });
                    }
                });
            });
            res.json({ feedbacks });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    addLike : async (req, res) => {
        try {
            const { userId, feedbackId ,userLiked} = req.body;
            console.log(userLiked);
            const user = await User.findById(userLiked);
            if (!user) {
              return res.status(404).send({ message: "User not found." });
            }
        
            const feedback = user.feedbacks.id(feedbackId);
            console.log(feedback);
            if (!feedback) {
              return res.status(404).send({ message: "Feedback not found." });
            }
        
            if (feedback.likesBy.includes(userId)) {
              return res.status(400).send({ message: "You have already liked this feedback." });
            }
        
            feedback.likesBy.push(userId);
            feedback.likes += 1;
        
            await user.save();
        
            res.send({ message: "like added successfully." });
          } catch (error) {
            res.status(500).send({ message: error.message });
          }
        },
      addDislike : async (req, res) => {
        try {
            const { userId, feedbackId ,userLiked} = req.body;
            console.log(userLiked);
            const user = await User.findById(userLiked);
            if (!user) {
              return res.status(404).send({ message: "User not found." });
            }
        
            const feedback = user.feedbacks.id(feedbackId);
            console.log(feedback);
            if (!feedback) {
              return res.status(404).send({ message: "Feedback not found." });
            }
        
            if (feedback.dislikesBy.includes(userId)) {
              return res.status(400).send({ message: "You have already disliked this feedback." });
            }
        
            feedback.dislikesBy.push(userId);
            feedback.dislikes += 1;
        
            await user.save();
        
            res.send({ message: "Dislike added successfully." });
          } catch (error) {
            res.status(500).send({ message: error.message });
          }
        }
}

module.exports = userCtrl;




var
  Talk = require('../models/Talk.js')

module.exports = {
  index: function(req, res){
      Talk.find({}, function(err, talks){
        if(err) throw err
        res.json(talks)
      })
  },

  create: function(req, res){
    Talk.create(req.body, function(err, talk){
      if(err) console.log(err)
      res.json({success: true, message: "Talk created", talk: talk})
    })
  },

  show: function(req, res){
    Talk.findOne({_id: req.params.id}, 'firstname lastname email', function(err, talk){
      if(err) console.log(err)
      res.json(talk)
    })
  },

  update: function(req, res){
    Talk.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, talk){
      if(err) console.log(err)
      res.json({success: true, message: "Talk updated.", talk: talk})
    })
  },

  delete: function(req, res){
    Talk.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) console.log(err)
      res.json({success: true, message: "Talk deleted."})
    })
  }

}

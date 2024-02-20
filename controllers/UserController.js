const User = require("../Models/UserModel")
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
const { nom, prenom, email, password, age } = req.body;
try{

  const verifUser = await User .findOne({ email})
  console.log(verifUser)
  if (verifUser){
      return res.status(201).json({ message: 'utilisateur existes' })
}
    const CryptPassword = await bcrypt.hash(password, 10)
    const NewUser = new User({ nom, prenom, email, password: CryptPassword}); 
    await NewUser.save();
    res.status(201).json({ msg: "ok bien insérer", objet: NewUser });
    
    } catch (error) {
   res.status(201).json({
        msg: "Erreur lors de la création de l'utilisateur", 
        error: error,
       });
       console.log(error)
     }
    };


    const GetAllUsers = async (req, res) => {
      try{
        const users = await User.find();
        return res.status(201).json({ message: 'ok', objects: users })
      }
      catch (error) {
        res.status(201).json({ message: "error", error })
      }
    };
     
    const LoginUser = async (req, res) => {
      const { email, password } = req.body
      try{
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(201).json({ msg: 'utilisateur non trouveée'})
        }
        const ValidPassword = await bcrypt.compare(password, user.password)
        console.log(ValidPassword)
        if (!ValidPassword) {
          return res.status(201).json({ message: "mot de passe incorrect" })
        }
         res.status(201).json({ message: 'ok', objects: user })
      }
      catch (error) {
        res.status(201).json({ message: "error", error })
      }
    };
    
    const GetSingleUser = async (req, res) => {
     const { id } = req.params
     try {
      const user = await User.findOne({ _id: id })
      if (user) {
        return res.status(201).json({ message: 'ok', object: user })
      }
    }
      catch (error) {
        res.status(201).json({ message: 'error', error })
      }
     };
     
    const DeleteUser = async (req, res) => {
      const { id } = req.params
      try {
        const resultat = await User.findOneAndDelete({ _id: id})
        if (resultat) {
          return res.status(201).json({ msg: 'ok' , res: resultat })
        }
      }
      catch (error) {
        return res.status(201).json({ message: "error", error})
      }
    };
    
    const UpdateUser = async (req, res) => {
      const { id, nom, prenom, email, age } = req.params
      try {
        const user = await User.findOne({ _id: id})
        if (!user) {
          return res.status(201).json({ msg: 'user non trouvé'  })
        }
        user.nom = nom;
        user.age = age;
        user.email = email;
        user.prenom= prenom;
       await user.save()
       res.status(201).json({ message: " ok " , objet: user})
      }
      catch (error) {
        return res.status(201).json({ message: "error", error})
      }
    };


    module.exports = { createUser, GetAllUsers, LoginUser, GetSingleUser, DeleteUser, UpdateUser }
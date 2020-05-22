// import {Router} from 'express'
// import multer from 'multer'
// // import auth from '../middleware/auth.middleware'
// import storage from '../storage/storage'
// import { User } from '../models/User'

// const router = Router()
// const upload = multer({ storage })

// router.post('/avatar', auth, upload.single('avatar'), async (req, res, next) => {
//     try {

//         const user = await User.findById(req.user.userId)
        
//         if (!user) { return { message: "uncorrect data" } }

//         user.avatar = req.file.filename
//         user.save()
        

//     } catch (e) {
        
//         console.warn(e)
//         res.status(500).json({ message: "server error" })
//     }

//     const file = req.file;
//     const meta = req.body;

//     res.status(200).json({ meta, file })
// });

// export router
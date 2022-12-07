const Sale = require ('../models/sales');
const User = require ('../models/user');

const createSale = async (req, res) => {
    const content = req.body;
    const user = await User.findById(content.userId);

    console.log( 'the user', user);
    
    try {
      const sale = await Sale.create({ user: content.userId,  ...content })

      console.log('checking what is here ', sale);
      
      //user.sales = user.sales.concat(sale._id)
      //await user.save();
      
      return res.status(201).json({ data: sale });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };

// get all the Sales
const getAllsales = async (req , res)=>{
    try {
        const sales = await Sales.find({});
        return res.status(201).json({data: sales});
    }catch (error) {
        console.log(error);
        return res.status(500).end();
    }
  
   
};

const getOneSales = async (req, res) => {
    const id = req.params.id 

    try {
        const sales = await sales.findOne({_id: id});

        if (!sales) {
            return res.status(400).json({ message: 'user not found '});
        } 
        return res.status(201).json({ data: user});
    } catch (error) {
            console.log(error);
            return res.status(500).end();
        }
    };
    
    const updateOneSales = async (req, res) => {
        const id = req.params.id
        const content = req.body

        try {
            const sales = await sales.findOneAndUpdate(
                {_id: id},
                content,
                { new: true }
            );

            if (!sales) {
                return res.status(400).json({ message: 'user not found' });
            }
            return res.status(201).json({ data: sales });
        } catch (error) {
            console.log(error);
            return res.status(500).end();
        }
    }



module.exports = {
    createSale,
    getAllsales,
    getOneSales,
    updateOneSales
};
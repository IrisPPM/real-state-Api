import Property from '../models/Property.js';

const create = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    return res.json({
      msg: 'Property created successfully',
      property,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'error creating property',
      error,
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const updateProperty = await Property.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: 'Property updated successfully',
      updateProperty,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error updating the property',
      error,
    });
  }
};


export { create, update };
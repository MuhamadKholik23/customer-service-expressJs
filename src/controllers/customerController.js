const customerService = require("../services/customerService");

const getCustomers = async (req, res, next) => {
  try {
    const customers = await customerService.getCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const customerId = req.params.id;
    const customer = await customerService.getCustomerById(customerId);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const customerData = req.body;
    const newCustomer = await customerService.createCustomer(customerData);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.id;
    const customerData = req.body;
    const updatedCustomer = await customerService.updateCustomer(
      customerId,
      customerData
    );
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.id;
    await customerService.deleteCustomer(customerId);
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

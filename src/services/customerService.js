const Customer = require("../models/customer");

const getCustomers = async () => {
  try {
    return await Customer.findAll();
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw new Error("Unable to fetch customers");
  }
};

const getCustomerById = async (customerId) => {
  try {
    return await Customer.findByPk(customerId);
  } catch (error) {
    throw new Error("Unable to fetch customer");
  }
};

const createCustomer = async (customerData) => {
  try {
    return await Customer.create(customerData);
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw new Error("Unable to create customer");
  }
};

const updateCustomer = async (customerId, customerData) => {
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) throw new Error("Customer not found");

    return await customer.update(customerData);
  } catch (error) {
    throw new Error("Unable to update customer");
  }
};

const deleteCustomer = async (customerId) => {
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) throw new Error("Customer not found");

    return await customer.destroy();
  } catch (error) {
    throw new Error("Unable to delete customer");
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

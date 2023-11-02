import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';
import config from '../config';

beforeAll(async () => {
  await mongoose.createConnection(config.test_database_url as string);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Route checking', () => {
  it('should respond with a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Elveator mainteinance server!');
  });

  it('should respond with a 404 status code for an invalid route', async () => {
    const response = await request(app).get('/api/v1/invalid-route');
    expect(response.statusCode).toBe(404);
  });

  it('should respond with a 200 status code and users retrived message', async () => {
    const response = await request(app).get('/api/v1/users');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Users retrived successfully!')
  });

  it('should respond with a 200 status code and elevators retrived message', async () => {
    const response = await request(app).get('/api/v1/elevators');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Eelvators retrived successfully!')
  });
});




describe('ElevatorController', () => {
  
    it('should return elevators by user', async () => {
      const userEmail = 'test2@email.com';
      const response = await request(app).get(`/api/v1/elevators/${userEmail}`);
        expect(response.status).toBe(200);
        expect(response.body.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Data retrived successfully!');
      
    });
  
    it('should handle a case where no data is available for the user', async () => {
      const userEmail = 'nonexistentuser';
      const response = await request(app).get(`/api/v1/elevators/${userEmail}`);
      expect(response.status).toBe(200);
      expect(response.body.statusCode).toBe(204);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('No data Available for the user!');
    });
  });
  

  describe('UserController', () => {
  
    it('should return user by eamil', async () => {
      const userEmail = 'test2@email.com';
      const response = await request(app).get(`/api/v1/users/${userEmail}`);
        expect(response.status).toBe(200);
        expect(response.body.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Data retrived successfully!');
      
    });
  
    it('should handle a case where no user is available', async () => {
      const userEmail = 'nonexistentuser';
      const response = await request(app).get(`/api/v1/users/${userEmail}`);
      expect(response.status).toBe(200);
      expect(response.body.statusCode).toBe(204);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('No data Available for the user!');
    });
  });

// npx jest --detectOpenHandles
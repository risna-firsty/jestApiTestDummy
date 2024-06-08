const request = require('supertest');

describe('GET https://jsonplaceholder.typicode.com/posts/3', () => {
  it('should have response status 200', async () => {
    const response = await request('https://jsonplaceholder.typicode.com')
      .get('/posts/3');
    
    expect(response.status).toBe(200);
  });

  it('should have response body id 3', async () => {
    const response = await request('https://jsonplaceholder.typicode.com')
      .get('/posts/3');
    
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(3);
  });

  it('should have title that is not empty', async () => {
    const response = await request('https://jsonplaceholder.typicode.com')
      .get('/posts/3');
    
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(3);
    expect(response.body.title).toBeDefined();
  });

  it('should have title that is not empty', async () => {
    const response = await request('https://jsonplaceholder.typicode.com')
      .get('/posts/3');
    
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(3);
    expect(response.body.title).toBeDefined();
    expect(response.body.title).not.toBeNull();
    expect(response.body.title).not.toBe('');
  });

  it('should have body that is not empty', async () => {
    const response = await request('https://jsonplaceholder.typicode.com')
      .get('/posts/3');
    
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(3);
    expect(response.body.body).toBeDefined();
    expect(response.body.body).not.toBeNull();
    expect(response.body.body).not.toBe('');
  });
});
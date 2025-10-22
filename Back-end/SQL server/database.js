import sql from 'mssql';

const config = {
  user: 'sa',         // Tên người dùng SQL Server
  password: '123', // Mật khẩu SQL Server
  server: 'localhost',           // Địa chỉ máy chủ SQL Server (ví dụ: 'localhost', '192.168.1.1', hoặc tên instance)
  database: 'SocialMediaApp',// Tên database SQL Server
  port: 1433,                    // Cổng mặc định của SQL Server (thường là 1433)
  options: {
    // Có thể cần cấu hình này nếu sử dụng chứng thực Windows hoặc các thiết lập khác
    encrypt: true, // Nếu bạn kết nối đến Azure SQL hoặc yêu cầu mã hóa
    trustServerCertificate: true // Cần thiết nếu bạn đang sử dụng chứng chỉ tự ký (self-signed)
  }
};

// Tạo một pool kết nối
const pool = new sql.ConnectionPool(config);

// Kết nối và xuất pool
pool.connect()
  .then(() => {
    console.log('Connected to SQL Server successfully!');
  })
  .catch(err => {
    console.error('Database Connection Failed! Error: ' + err);
  });

export default pool;
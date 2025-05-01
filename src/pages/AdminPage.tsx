
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Search, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for orders
interface Order {
  id: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    category: string;
  }[];
  total: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  deliveryMethod: "delivery" | "takeaway" | "online";
  date: string;
}

const mockOrders: Order[] = [
  {
    id: 1001,
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      address: "123 Main St, Anytown, CA 12345"
    },
    items: [
      {
        id: 1,
        name: "Chocolate Truffle Cake",
        quantity: 1,
        price: 35,
        category: "Cakes & Pastries"
      },
      {
        id: 7,
        name: "Chocolate Chip Cookies",
        quantity: 2,
        price: 8.5,
        category: "Cookies & Biscuits"
      }
    ],
    total: 52,
    status: "completed",
    deliveryMethod: "delivery",
    date: "2025-04-28"
  },
  {
    id: 1002,
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "(555) 987-6543",
      address: "456 Oak St, Othertown, NY 67890"
    },
    items: [
      {
        id: 13,
        name: "Vanilla Bean Ice Cream",
        quantity: 1,
        price: 12,
        category: "Frozen Desserts"
      }
    ],
    total: 12,
    status: "processing",
    deliveryMethod: "takeaway",
    date: "2025-04-29"
  },
  {
    id: 1003,
    customer: {
      name: "Robert Johnson",
      email: "robert@example.com",
      phone: "(555) 456-7890",
      address: "789 Pine St, Somewhere, TX 54321"
    },
    items: [
      {
        id: 19,
        name: "Bread Pudding",
        quantity: 1,
        price: 18,
        category: "Puddings & Custards"
      },
      {
        id: 25,
        name: "Mini Chocolate Eclairs",
        quantity: 4,
        price: 6,
        category: "Small Bites & Sweets"
      },
      {
        id: 31,
        name: "Apple Pie",
        quantity: 1,
        price: 25,
        category: "Pies & Tarts"
      }
    ],
    total: 67,
    status: "pending",
    deliveryMethod: "online",
    date: "2025-04-30"
  }
];

const AdminPage = () => {
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setOrders(mockOrders);
      setFilteredOrders(mockOrders);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const results = orders.filter(order =>
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrders(results);
  }, [searchTerm, orders]);

  const updateOrderStatus = (orderId: number, status: "pending" | "processing" | "completed" | "cancelled") => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
    
    toast({
      title: "Order status updated",
      description: `Order #${orderId} has been marked as ${status}.`,
    });
  };
  
  const exportOrders = () => {
    toast({
      title: "Export started",
      description: "Orders are being downloaded as CSV file.",
    });
    
    // In a real app, this would generate and download a CSV file
    setTimeout(() => {
      toast({
        title: "Export completed",
        description: "Orders have been downloaded successfully.",
      });
    }, 1000);
  };

  const viewOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // Redirect if not admin
  if (!isAdmin) {
    toast({
      title: "Access denied",
      description: "You need admin privileges to access this page.",
      variant: "destructive",
    });
    return <Navigate to="/" />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Admin Dashboard
        </h1>
        <Button onClick={exportOrders} className="flex items-center">
          <Download size={16} className="mr-2" />
          Export Orders
        </Button>
      </div>

      <Tabs defaultValue="orders" className="mb-8">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Recent Orders
                </h2>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
                  <Input
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="p-8 text-center">
                <div className="inline-block w-8 h-8 border-4 border-gray-300 border-t-dessert rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading orders...</p>
              </div>
            ) : filteredOrders.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Delivery</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">#{order.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{order.customer.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {order.customer.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.items.length} items</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              order.deliveryMethod === "delivery"
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                                : order.deliveryMethod === "takeaway"
                                ? "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
                                : "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                            }
                          >
                            {order.deliveryMethod.charAt(0).toUpperCase() + order.deliveryMethod.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              order.status === "completed"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                                : order.status === "processing"
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                                : order.status === "cancelled"
                                ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                                : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                            }
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => viewOrderDetails(order)}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  No orders found matching your search.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="customers" className="mt-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-gray-600 dark:text-gray-400">
              Customer management features coming soon...
            </h3>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-gray-600 dark:text-gray-400">
              Analytics features coming soon...
            </h3>
          </div>
        </TabsContent>
      </Tabs>

      {/* Order Details Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Order #{selectedOrder.id} Details
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </Button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Customer Information
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-4">
                    <p className="font-medium">{selectedOrder.customer.name}</p>
                    <p>{selectedOrder.customer.email}</p>
                    <p>{selectedOrder.customer.phone}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedOrder.customer.address}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Order Information
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Date:</span>
                      <span>{selectedOrder.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Delivery Method:</span>
                      <Badge
                        variant="outline"
                        className={
                          selectedOrder.deliveryMethod === "delivery"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                            : selectedOrder.deliveryMethod === "takeaway"
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
                            : "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                        }
                      >
                        {selectedOrder.deliveryMethod.charAt(0).toUpperCase() + selectedOrder.deliveryMethod.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Status:</span>
                      <Badge
                        variant="outline"
                        className={
                          selectedOrder.status === "completed"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                            : selectedOrder.status === "processing"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                            : selectedOrder.status === "cancelled"
                            ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                            : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                        }
                      >
                        {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Total:</span>
                      <span>${selectedOrder.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Order Items
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 rounded overflow-hidden mb-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedOrder.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Update Status
              </h4>
              <div className="flex space-x-2">
                <Button
                  variant={selectedOrder.status === "pending" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateOrderStatus(selectedOrder.id, "pending")}
                  className={selectedOrder.status === "pending" ? "bg-dessert hover:bg-dessert-dark" : ""}
                >
                  Pending
                </Button>
                <Button
                  variant={selectedOrder.status === "processing" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateOrderStatus(selectedOrder.id, "processing")}
                  className={selectedOrder.status === "processing" ? "bg-dessert hover:bg-dessert-dark" : ""}
                >
                  Processing
                </Button>
                <Button
                  variant={selectedOrder.status === "completed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateOrderStatus(selectedOrder.id, "completed")}
                  className={selectedOrder.status === "completed" ? "bg-dessert hover:bg-dessert-dark" : ""}
                >
                  Completed
                </Button>
                <Button
                  variant={selectedOrder.status === "cancelled" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateOrderStatus(selectedOrder.id, "cancelled")}
                  className={selectedOrder.status === "cancelled" ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  Cancelled
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;

import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function DashboardOrganizer() {
  return (
    <div key="1" className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 p-8">
      <main>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Organizer Dashboard</h2>
          <div className="flex flex-wrap gap-6">
            <Button variant="outline">Real-Time Sales Data</Button>
            <Button variant="outline">Customer Insights</Button>
            <Button variant="outline">Event Analytics</Button>
            <Button variant="outline">Resale Oversight</Button>
            <Button variant="outline">Engagement Metrics</Button>
            <Button variant="outline">Notifications</Button>
            <Button variant="outline">Financial Reporting</Button>
            <Button variant="outline">Marketing Tools</Button>
          </div>
        </div>
        <section className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Real-Time Sales Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Live Ticket Sales</CardTitle>
                  <CardDescription>Monitor real-time sales and revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Total Tickets Sold: 250</p>
                  <p className="text-sm text-gray-600">Revenue: $25,000</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Track revenue trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Average Daily Revenue: $1,000</p>
                  <p className="text-sm text-gray-600">Peak Sales Time: 12:00 PM</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Ticket Sales Map</CardTitle>
                  <CardDescription>Geographic distribution of sales</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Top Selling Region: New York</p>
                  <p className="text-sm text-gray-600">International Sales: 20%</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Customer Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Buyer Demographics</CardTitle>
                  <CardDescription>Understand your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Age Group: 25-34</p>
                  <p className="text-sm text-gray-600">Gender: Male</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Buying Patterns</CardTitle>
                  <CardDescription>Analyze purchasing behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Popular Ticket Type: VIP</p>
                  <p className="text-sm text-gray-600">Repeat Buyers: 30%</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Customer Feedback</CardTitle>
                  <CardDescription>Gather feedback for improvements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Satisfaction Rate: 90%</p>
                  <p className="text-sm text-gray-600">Improvement Areas: Pricing</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Event Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Peak Selling Times</CardTitle>
                  <CardDescription>Optimize event scheduling</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Peak Time: Weekends</p>
                  <p className="text-sm text-gray-600">Popular Events: Music Concerts</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Average Ticket Prices</CardTitle>
                  <CardDescription>Set competitive pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Average Price: $50</p>
                  <p className="text-sm text-gray-600">Price Range: $20 - $100</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Geographical Reach</CardTitle>
                  <CardDescription>Expand your event reach</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Local Sales: 60%</p>
                  <p className="text-sm text-gray-600">International Sales: 40%</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Resale Oversight</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Resale Rules</CardTitle>
                  <CardDescription>Manage ticket resale policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Resale Limit: 2x Face Value</p>
                  <p className="text-sm text-gray-600">Resale Fee: 10%</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Secondary Market</CardTitle>
                  <CardDescription>Monitor secondary market activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Resale Listings: 50</p>
                  <p className="text-sm text-gray-600">Market Demand: High</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Engagement Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Customer Engagement</CardTitle>
                  <CardDescription>Track customer interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Page Visits: 500</p>
                  <p className="text-sm text-gray-600">Click-Through Rate: 10%</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Promotion Performance</CardTitle>
                  <CardDescription>Evaluate promotional campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Campaign Reach: 1000</p>
                  <p className="text-sm text-gray-600">Conversion Rate: 5%</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Notifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Milestone Alerts</CardTitle>
                  <CardDescription>Stay informed on key events</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Upcoming Event: Music Festival</p>
                  <p className="text-sm text-gray-600">Ticket Sales Deadline</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Issue Notifications</CardTitle>
                  <CardDescription>Receive alerts on critical issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Payment Failure</p>
                  <p className="text-sm text-gray-600">Event Cancellation</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Financial Reporting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Financial Reports</CardTitle>
                  <CardDescription>Access detailed financial data</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Revenue Summary</p>
                  <p className="text-sm text-gray-600">Expense Breakdown</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Export Options</CardTitle>
                  <CardDescription>Export data for accounting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Download Reports</p>
                  <p className="text-sm text-gray-600">Share with Accountant</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Marketing Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Marketing Integration</CardTitle>
                  <CardDescription>Connect with marketing platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Campaign Performance</p>
                  <p className="text-sm text-gray-600">ROI Tracking</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Campaign Analytics</CardTitle>
                  <CardDescription>Measure marketing campaign success</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Conversion Rates</p>
                  <p className="text-sm text-gray-600">Audience Segmentation</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";

type DataItem = { name: string; value?: number; users?: number };

export default function Page() {


  
  const lineData: DataItem[] = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 700 }
  ];

  const [metrics, setMetrics] = useState<number[]>([]);
  const [tableData, setTableData] = useState<unknown[]>([]);
    useEffect(() => {
    setMetrics([
      Math.floor(Math.random() * 10000),
      Math.floor(Math.random() * 10000),
      Math.floor(Math.random() * 10000),
      Math.floor(Math.random() * 10000)
    ]);
    setTableData([
      { name: "Campaign A", users: 2400, conversions: Math.floor(Math.random() * 500), revenue: Math.floor(Math.random() * 10000) },
      { name: "Campaign B", users: 1398, conversions: Math.floor(Math.random() * 500), revenue: Math.floor(Math.random() * 10000) },
      { name: "Campaign C", users: 9800, conversions: Math.floor(Math.random() * 500), revenue: Math.floor(Math.random() * 10000) },
      { name: "Campaign D", users: 3908, conversions: Math.floor(Math.random() * 500), revenue: Math.floor(Math.random() * 10000) }
    ]);
  }, []);

  const barData: DataItem[] = [
    { name: 'Campaign A', users: 2400 },
    { name: 'Campaign B', users: 1398 },
    { name: 'Campaign C', users: 9800 },
    { name: 'Campaign D', users: 3908 }
  ];

  const pieData = [
    { name: 'Organic', value: 400 },
    { name: 'Paid', value: 300 },
    { name: 'Referral', value: 300 },
    { name: 'Social', value: 200 }
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen dark:bg-gray-900">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">ADmyBRAND Insights</h1>
        <Button>Toggle Dark/Light Mode</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['Revenue', 'Users', 'Conversions', 'Growth %'].map((metric, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index}>
            <Card className="shadow-lg">
              <CardContent>
                <p className="text-gray-500">{metric}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
              <Bar dataKey="users" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Campaign Data</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-left">
                <th className="p-3">Campaign</th>
                <th className="p-3">Users</th>
                <th className="p-3">Conversions</th>
                <th className="p-3">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {barData.map((row, index) => (
                <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-3">{row.name}</td>
                  <td className="p-3">{row.users}</td>
                  <td className="p-3">{metrics[index] * 500}</td>
                  <td className="p-3">${metrics[index] * 10000}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

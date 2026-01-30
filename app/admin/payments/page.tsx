'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function PaymentsAdmin() {
  const [payments, setPayments] = useState({
    card: {
      enabled: true,
      providers: 'PayPal, Visa, Mastercard',
      publicKey: 'pk_live_****',
    },
    bank: {
      enabled: true,
      accountHolder: 'Elevate Impact Foundation',
      accountNumber: '1234567890',
      routingNumber: '021000021',
      swift: 'CHUSUSMM',
    },
    mobile: {
      enabled: true,
      mtn: '+256700123456',
      airtel: '+256701234567',
      mpesa: '+254712345678',
    }
  })

  const [editing, setEditing] = useState<string | null>(null)
  const [formData, setFormData] = useState(payments)

  const handleSave = () => {
    setPayments(formData)
    setEditing(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold">Payment Methods</h1>
        <p className="text-foreground/70 mt-2">Manage donation payment options</p>
      </div>

      {/* Card Payments */}
      <Card>
        <CardHeader className="flex flex-row justify-between items-center pb-3">
          <div>
            <CardTitle>Card Payments</CardTitle>
            <p className="text-sm text-foreground/60 mt-1">PayPal, Visa, Mastercard</p>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" onClick={() => { setEditing('card'); setFormData(payments); }}>Edit</Button>
        </CardHeader>
        {editing === 'card' ? (
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Providers</label>
              <input type="text" value={formData.card.providers} onChange={(e) => setFormData({ ...formData, card: { ...formData.card, providers: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Public Key</label>
              <input type="password" value={formData.card.publicKey} onChange={(e) => setFormData({ ...formData, card: { ...formData.card, publicKey: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSave}>Save</Button>
            </div>
          </CardContent>
        ) : (
          <CardContent className="space-y-2">
            <p><span className="font-medium">Providers:</span> {payments.card.providers}</p>
            <p><span className="font-medium">Status:</span> <span className="text-green-600">Active</span></p>
          </CardContent>
        )}
      </Card>

      {/* Bank Transfer */}
      <Card>
        <CardHeader className="flex flex-row justify-between items-center pb-3">
          <div>
            <CardTitle>Bank Transfer</CardTitle>
            <p className="text-sm text-foreground/60 mt-1">Direct bank account details</p>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" onClick={() => { setEditing('bank'); setFormData(payments); }}>Edit</Button>
        </CardHeader>
        {editing === 'bank' ? (
          <CardContent className="space-y-4">
            <input type="text" placeholder="Account Holder" value={formData.bank.accountHolder} onChange={(e) => setFormData({ ...formData, bank: { ...formData.bank, accountHolder: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="text" placeholder="Account Number" value={formData.bank.accountNumber} onChange={(e) => setFormData({ ...formData, bank: { ...formData.bank, accountNumber: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="text" placeholder="Routing Number" value={formData.bank.routingNumber} onChange={(e) => setFormData({ ...formData, bank: { ...formData.bank, routingNumber: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="text" placeholder="SWIFT Code" value={formData.bank.swift} onChange={(e) => setFormData({ ...formData, bank: { ...formData.bank, swift: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSave}>Save</Button>
            </div>
          </CardContent>
        ) : (
          <CardContent className="space-y-2">
            <p><span className="font-medium">Account:</span> {payments.bank.accountNumber}</p>
            <p><span className="font-medium">Holder:</span> {payments.bank.accountHolder}</p>
            <p><span className="font-medium">Status:</span> <span className="text-green-600">Active</span></p>
          </CardContent>
        )}
      </Card>

      {/* Mobile Money */}
      <Card>
        <CardHeader className="flex flex-row justify-between items-center pb-3">
          <div>
            <CardTitle>Mobile Money</CardTitle>
            <p className="text-sm text-foreground/60 mt-1">MTN, Airtel, M-Pesa numbers</p>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" onClick={() => { setEditing('mobile'); setFormData(payments); }}>Edit</Button>
        </CardHeader>
        {editing === 'mobile' ? (
          <CardContent className="space-y-4">
            <input type="tel" placeholder="MTN Number" value={formData.mobile.mtn} onChange={(e) => setFormData({ ...formData, mobile: { ...formData.mobile, mtn: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="tel" placeholder="Airtel Number" value={formData.mobile.airtel} onChange={(e) => setFormData({ ...formData, mobile: { ...formData.mobile, airtel: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="tel" placeholder="M-Pesa Number" value={formData.mobile.mpesa} onChange={(e) => setFormData({ ...formData, mobile: { ...formData.mobile, mpesa: e.target.value } })} className="w-full px-4 py-2 border border-border rounded-lg" />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleSave}>Save</Button>
            </div>
          </CardContent>
        ) : (
          <CardContent className="space-y-2">
            <p><span className="font-medium">MTN:</span> {payments.mobile.mtn}</p>
            <p><span className="font-medium">Airtel:</span> {payments.mobile.airtel}</p>
            <p><span className="font-medium">M-Pesa:</span> {payments.mobile.mpesa}</p>
            <p><span className="font-medium">Status:</span> <span className="text-green-600">Active</span></p>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

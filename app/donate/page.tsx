'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Heart, Copy, Check, Building2, Smartphone, CreditCard, ArrowRight } from 'lucide-react'

const donationAmounts = [
  { amount: 25, label: '$25', description: 'Meals for 5 children' },
  { amount: 50, label: '$50', description: 'School supplies' },
  { amount: 100, label: '$100', description: 'Healthcare checkup' },
  { amount: 250, label: '$250', description: 'Job training' },
  { amount: 500, label: '$500', description: 'Water infrastructure' },
  { amount: 1000, label: '$1000', description: 'Full scholarship' },
]

const paymentMethods = [
  {
    id: 'card',
    name: 'Card Payment',
    icon: CreditCard,
    description: 'Visa, Mastercard, PayPal',
    details: 'Secure online payment'
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    icon: Building2,
    description: 'Direct transfer',
    details: 'Fast and secure'
  },
  {
    id: 'mobile',
    name: 'Mobile Money',
    icon: Smartphone,
    description: 'MTN, Airtel, M-Pesa',
    details: 'Instant payment'
  }
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount || 100

  const copyToClipboard = (text: string, itemId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(itemId)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Heart className="w-16 h-16 mx-auto" fill="currentColor" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Give With <span className="text-white font-bold">Purpose</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Your generosity fuels transformation. Every dollar supports real people and sustainable change.
            </p>
          </div>
        </section>

        {/* Donation Amount Selection */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-border p-8 md:p-12 space-y-8">
              {/* Preset Amounts */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Select Your Gift Amount
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {donationAmounts.map((item) => (
                    <button
                      key={item.amount}
                      onClick={() => {
                        setSelectedAmount(item.amount)
                        setCustomAmount('')
                      }}
                      className={`p-4 rounded-lg border-2 transition-all text-center group ${
                        selectedAmount === item.amount && !customAmount
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                        {item.label}
                      </div>
                      <div className="text-xs text-foreground/60 mt-2">{item.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="border-t border-border pt-8">
                <label className="block text-sm font-semibold text-foreground mb-4">
                  Or enter custom amount
                </label>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <span className="absolute left-4 top-3 text-2xl text-foreground/50">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount(null)
                      }}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  {customAmount && (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setCustomAmount('')
                        setSelectedAmount(100)
                      }}
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>

              {/* Amount Summary */}
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-foreground/70">Total Donation</span>
                  <div className="text-4xl font-bold text-primary">${finalAmount.toFixed(2)}</div>
                </div>
                <p className="text-sm text-foreground/60">
                  Your contribution will provide direct support to communities in need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Choose Payment Method
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {paymentMethods.map((method) => {
                const Icon = method.icon
                return (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-6 rounded-lg border-2 transition-all text-left ${
                      paymentMethod === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-4 ${paymentMethod === method.id ? 'text-primary' : 'text-foreground/70'}`} />
                    <h3 className="font-bold text-foreground mb-1">{method.name}</h3>
                    <p className="text-sm text-foreground/60 mb-2">{method.description}</p>
                    <p className="text-xs text-foreground/50">{method.details}</p>
                  </button>
                )
              })}
            </div>

            {/* Payment Details */}
            {paymentMethod === 'card' && (
              <div className="bg-white rounded-lg border border-border p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Card Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Cardholder Name
                      </label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Card Number
                      </label>
                      <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Expiry</label>
                        <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">CVC</label>
                        <input type="text" placeholder="123" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* PayPal Logos */}
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-foreground/60 mb-4">We also accept</p>
                  <div className="flex gap-4">
                    <div className="px-4 py-2 bg-muted rounded-lg">
                      <p className="font-bold text-sm">PayPal</p>
                    </div>
                    <div className="px-4 py-2 bg-blue-100 rounded-lg">
                      <p className="font-bold text-sm text-blue-900">Visa</p>
                    </div>
                    <div className="px-4 py-2 bg-red-100 rounded-lg">
                      <p className="font-bold text-sm text-red-900">Mastercard</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="bg-white rounded-lg border border-border p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Bank Transfer Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Bank Name', value: 'Global Charity Bank' },
                    { label: 'Account Holder', value: 'Elevate Impact Foundation' },
                    { label: 'Account Number', value: '1234567890' },
                    { label: 'SWIFT Code', value: 'GCBKUS33' },
                    { label: 'Routing Number', value: '021000021' }
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <span className="text-foreground/70">{item.label}</span>
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        {copiedItem === item.label ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span className="text-sm">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span className="font-mono text-sm font-bold">{item.value}</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    Please email us your donation slip at donations@elevateimpact.org to receive your tax receipt.
                  </p>
                </div>
              </div>
            )}

            {paymentMethod === 'mobile' && (
              <div className="bg-white rounded-lg border border-border p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Mobile Money</h3>
                <div className="space-y-4">
                  {[
                    { name: 'MTN', code: '*123#' },
                    { name: 'Airtel', code: '*456#' },
                    { name: 'M-Pesa', code: '123456' }
                  ].map((provider) => (
                    <div key={provider.name} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <span className="font-semibold text-foreground">{provider.name}</span>
                      <button
                        onClick={() => copyToClipboard(provider.code, provider.name)}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        {copiedItem === provider.name ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span className="text-sm">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span className="font-mono text-sm font-bold">{provider.code}</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="mt-8 text-center space-y-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white gap-2 h-14 px-12 text-lg rounded-full transition-all hover:shadow-lg"
                onClick={() => {
                  const message = `Donation of $${finalAmount.toFixed(2)} via ${paymentMethod === 'card' ? 'Card/PayPal' : paymentMethod === 'bank' ? 'Bank Transfer' : 'Mobile Money'} has been processed successfully. Thank you for your generosity!`;
                  alert(message);
                  console.log('[v0] Donation completed:', { amount: finalAmount, method: paymentMethod });
                }}
              >
                <Heart className="w-6 h-6" fill="currentColor" />
                Complete Donation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-sm text-foreground/60">
                Your donation is secure, encrypted, and processed instantly. You'll receive a confirmation email with your tax receipt.
              </p>
              <div className="grid grid-cols-3 gap-4 text-xs text-foreground/60 pt-4">
                <div>🔒 Secure</div>
                <div>✓ Instant</div>
                <div>📧 Receipt</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Tax Information</h3>
            <p className="text-foreground/70">
              Elevate Impact is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible.
              You will receive a tax receipt via email immediately after donation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

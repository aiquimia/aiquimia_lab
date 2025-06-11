import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const RegistrationForm = ({ onSubmit, isSubmitting, authError }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState('academic');
  
  const password = watch('password');
  
  return (
    <div className="space-y-6">
      {/* Account Type Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-text-primary">
          Account Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setAccountType('academic')}
            className={`flex items-center justify-center py-3 px-4 border rounded-molecular text-sm font-medium scientific-transition ${
              accountType === 'academic'
                ? 'border-primary bg-primary-50 text-primary'
                : 'border-border bg-white text-text-primary hover:bg-surface'
            }`}
          >
            <Icon name="GraduationCap" size={18} className="mr-2" />
            Academic
          </button>
          <button
            type="button"
            onClick={() => setAccountType('industry')}
            className={`flex items-center justify-center py-3 px-4 border rounded-molecular text-sm font-medium scientific-transition ${
              accountType === 'industry'
                ? 'border-primary bg-primary-50 text-primary'
                : 'border-border bg-white text-text-primary hover:bg-surface'
            }`}
          >
            <Icon name="Building2" size={18} className="mr-2" />
            Industry
          </button>
        </div>
      </div>

      {/* Social Registration Options */}
      <div className="space-y-3">
        <button 
          type="button" 
          className="w-full flex items-center justify-center py-2.5 px-4 border border-border rounded-molecular text-text-primary bg-white hover:bg-surface transition-colors scientific-transition"
        >
          <Icon name="Mail" size={20} className="mr-3" />
          Continue with Google
        </button>
        
        <button 
          type="button" 
          className="w-full flex items-center justify-center py-2.5 px-4 border border-border rounded-molecular text-text-primary bg-white hover:bg-surface transition-colors scientific-transition"
        >
          <Icon name="Database" size={20} className="mr-3" />
          Continue with ORCID
        </button>
      </div>
      
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-light"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-text-secondary">Or create account with email</span>
        </div>
      </div>
      
      {/* Registration Error */}
      {authError && (
        <div className="p-3 bg-error-50 border border-error-100 text-error rounded-molecular flex items-start">
          <Icon name="AlertTriangle" size={20} className="mr-2 flex-shrink-0 mt-0.5" />
          <span>{authError}</span>
        </div>
      )}
      
      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-text-primary">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              {...register('firstName', {
                required: 'First name is required',
                minLength: {
                  value: 2,
                  message: 'First name must be at least 2 characters'
                }
              })}
              className={`block w-full px-3 py-2 border ${errors.firstName ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-error">{errors.firstName?.message}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="lastName" className="block text-sm font-medium text-text-primary">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              {...register('lastName', {
                required: 'Last name is required',
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 characters'
                }
              })}
              className={`block w-full px-3 py-2 border ${errors.lastName ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-error">{errors.lastName?.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-text-primary">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="Mail" size={18} className="text-text-tertiary" />
            </div>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email?.message}</p>
          )}
          {accountType === 'academic' && (
            <p className="mt-1 text-xs text-text-secondary">
              Use your institutional email for academic discounts
            </p>
          )}
        </div>

        {/* Institution/Organization */}
        <div className="space-y-1">
          <label htmlFor="organization" className="block text-sm font-medium text-text-primary">
            {accountType === 'academic' ? 'Institution' : 'Organization'}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name={accountType === 'academic' ? 'GraduationCap' : 'Building2'} size={18} className="text-text-tertiary" />
            </div>
            <input
              id="organization"
              type="text"
              autoComplete="organization"
              {...register('organization', {
                required: `${accountType === 'academic' ? 'Institution' : 'Organization'} is required`
              })}
              className={`block w-full pl-10 pr-3 py-2 border ${errors.organization ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
              placeholder={accountType === 'academic' ? 'University of Science' : 'Your Company'}
            />
          </div>
          {errors.organization && (
            <p className="mt-1 text-sm text-error">{errors.organization?.message}</p>
          )}
        </div>

        {/* Research Field */}
        <div className="space-y-1">
          <label htmlFor="researchField" className="block text-sm font-medium text-text-primary">
            Research Field
          </label>
          <select
            id="researchField"
            {...register('researchField', {
              required: 'Research field is required'
            })}
            className={`block w-full px-3 py-2 border ${errors.researchField ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
          >
            <option value="">Select your field</option>
            <option value="organic-chemistry">Organic Chemistry</option>
            <option value="inorganic-chemistry">Inorganic Chemistry</option>
            <option value="physical-chemistry">Physical Chemistry</option>
            <option value="biochemistry">Biochemistry</option>
            <option value="medicinal-chemistry">Medicinal Chemistry</option>
            <option value="materials-science">Materials Science</option>
            <option value="chemical-engineering">Chemical Engineering</option>
            <option value="pharmaceutical">Pharmaceutical Sciences</option>
            <option value="environmental">Environmental Chemistry</option>
            <option value="other">Other</option>
          </select>
          {errors.researchField && (
            <p className="mt-1 text-sm text-error">{errors.researchField?.message}</p>
          )}
        </div>
        
        {/* Password */}
        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-text-primary">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="Lock" size={18} className="text-text-tertiary" />
            </div>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: 'Password must contain uppercase, lowercase, and number'
                }
              })}
              className={`block w-full pl-10 pr-10 py-2 border ${errors.password ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon 
                name={showPassword ? 'EyeOff' : 'Eye'} 
                size={18} 
                className="text-text-tertiary hover:text-text-primary scientific-transition" 
              />
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-error">{errors.password?.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="Lock" size={18} className="text-text-tertiary" />
            </div>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match'
              })}
              className={`block w-full pl-10 pr-10 py-2 border ${errors.confirmPassword ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Icon 
                name={showConfirmPassword ? 'EyeOff' : 'Eye'} 
                size={18} 
                className="text-text-tertiary hover:text-text-primary scientific-transition" 
              />
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-error">{errors.confirmPassword?.message}</p>
          )}
        </div>
        
        {/* Terms and Privacy */}
        <div className="space-y-3">
          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              {...register('terms', {
                required: 'You must accept the terms and conditions'
              })}
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded scientific-transition mt-0.5"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-text-secondary">
              I agree to the{' '}
              <Link to="/terms" className="font-medium text-primary hover:text-primary-600 scientific-transition">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-primary hover:text-primary-600 scientific-transition">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className="text-sm text-error">{errors.terms?.message}</p>
          )}
          
          <div className="flex items-start">
            <input
              id="newsletter"
              type="checkbox"
              {...register('newsletter')}
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded scientific-transition mt-0.5"
            />
            <label htmlFor="newsletter" className="ml-2 block text-sm text-text-secondary">
              Send me updates about new features and scientific insights
            </label>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-molecular shadow-molecular text-sm font-medium text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 scientific-transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" className="animate-spin mr-2" size={18} />
                Creating Account...
              </>
            ) : (
              <>
                <Icon name="UserPlus" className="mr-2" size={18} />
                Create Account
              </>
            )}
          </button>
        </div>
      </form>
      
      {/* Sign In Link */}
      <div className="text-sm text-center pt-4">
        <span className="text-text-secondary">Already have an account? </span>
        <Link to="/sign-in-authentication-gateway" className="font-medium text-primary hover:text-primary-600 scientific-transition">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default RegistrationForm;